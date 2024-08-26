import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog}) => {
    return <div className="grid grid-cols-12 gap-4 px-10 pt-10 max-w-screen-xl mx-auto">
            <div className="col-span-8 ">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-400 mt-2">
                    Posted on 2nd december 2023
                </div>
                <div className="mt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-slate-600 text-lg">
                        Author
                </div>
                <div className="flex">
                    <div className="flex flex-col justify-center">
                        <Avatar name={blog.author.name || "Anonymous"} size="big"></Avatar>
                    </div>
                    <div className="pl-4">
                        <div className="text-3xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div>
                            random catch phrase of the author in his bio which should be little longer
                        </div>
                    </div>
                </div>
            </div>
        </div>
}