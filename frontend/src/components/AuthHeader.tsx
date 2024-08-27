import { Link } from "react-router-dom"

export const AuthHeader = ({heading,phrase,linkName, link}:{heading: string , phrase: string, linkName: string , link: string}) => {
    return <div className="flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="text-2xl font-bold text-cyan-900">
                {heading}
            </div>
            <div className="flex justify-center text-cyan-600">
                <div>{phrase}</div>
                <Link className="underline ml-2" to={link}>{linkName}</Link>
            </div>
        </div>
    </div>
}