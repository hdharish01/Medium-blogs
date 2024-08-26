import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.use('/*',cors())
app.route("/api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);





export default app

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZjQ2NTM4MjktZTM2ZS00ZGFjLTliYzEtM2M3MDM4N2FjODE0IiwidGVuYW50X2lkIjoiOTE1YTQyMzU5ZjY0MmE0OTAxYmFmYjE3ZmIwOTM1NjMxN2Q2MmUwMDVhMTY4OWU5OTBmYTMxMTVkMWZiN2JmNiIsImludGVybmFsX3NlY3JldCI6IjIyOTdiMTFhLTMxZWMtNDc4My1iNTExLWU5NGM4NjkxNDA3MiJ9.A2aDYM1oYsKZmt_-zWByl-5-Ewk6ju-kz7xSs44I4zo"