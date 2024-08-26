import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
export const Blog = () => {
    const {id}= useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if(loading || !blog){
        return <div>
            <FullBlogSkeleton />
        </div>
    }


    return <div>
        <Appbar />
        <FullBlog blog={blog}/>
    </div>
}