import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName:string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}




export const BlogCard = ({authorName,title,content,publishedDate,id}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b-2 py-2 border-slate-200 cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} /> 
                <div className="text-sm ml-2">
                    {authorName}
                </div>
                <div className="flex flex-col justify-center ml-2">
                    <Circle />
                </div>
                <div className="text-sm ml-2 text-gray-500 font-extralight">
                    {publishedDate}
                </div>
            </div>
            <div className="font-bold text-2xl mt-1">
                {title}
            </div>
            <div className="font-serif mt-2">
                {content.length>200 ? content.slice(0,200) + "..." : content}
            </div>
            <div className="mt-8 text-gray-500">
                {`${Math.ceil(content.length / 100)} minutes read`}
            </div>
        </div>
    </Link>
}

export function Avatar({name,size="small"}:{name:string,size?:"big" | "small"}){

    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 ${size==="small"? "w-5 h-5 text-xs" : "w-10 h-10 text-lg"}`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
    </div>
    
}

function Circle(){
    return <div className="h-0.5 w-0.5 rounded-full bg-slate-300"></div>
}