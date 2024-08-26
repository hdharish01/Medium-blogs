import { Hono } from "hono"
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput, updateBlogInput } from "@harish-kumar/medium-common";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
      },
    Variables:{
        userId: any;
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const token = authHeader.split(" ")[1]
    try{
        const user = await verify(token, c.env.JWT_SECRET);
        if(user){
            c.set("userId", user.id);
            await next();
        }else{
            c.status(403)
            return c.json({
                message: "you are not logged in"
            })
        }
    }catch{
        c.status(403)
        return c.json({
            message: "you are not logged in"
        })
    }
})

blogRouter.post('/',async (c) => {
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({
          message: "inputs are not correct"
        })
    }
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blog = await prisma.blog.create({
        data : {
            title: body.title,
            content: body.content,
            authorId: Number(userId)   
        }

    })
      
    return c.json({
        id: blog.id
    })
})
  
blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
          message: "inputs are not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blog = await prisma.blog.update({
        where:{
            id: body.id
        },
        data : {
            title: body.title,
            content: body.content,
        }

    })
      
    return c.json({
        id: blog.id
    })
})

//pagination needs to be done
blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
        select:{
            id:true,
            content:true,
            title:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blogs,
    })

})
  
blogRouter.get('/:id', async (c) => {      //doesn't require ':' while typing the url
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id: Number(id)
            },
            select:{
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name:true
                    }
                }
            }
        })
          
        return c.json({
            blog
        })    
    }catch(e){
        c.status(411);
        return c.json({
            message:"error while fetching blog post"
        })
    }
})
  
