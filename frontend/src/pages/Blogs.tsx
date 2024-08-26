import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs()

    if(loading){
        return <div>
            <BlogsSkeleton />
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl w-full mx-10">
                {blogs.map(blog => <BlogCard 
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                    publishedDate="2nd Feb 2024"
                />)}
                
            </div>
        </div>
    </div>
}
