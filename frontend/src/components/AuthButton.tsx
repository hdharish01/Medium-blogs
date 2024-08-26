export const AuthButton = ({label,onClick}:{label:string,onClick:any}) => {   //need to give proper type for onclick
    return (
    <div className="mt-6">
        <button onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 w-80">{label}</button>
    </div>
    )
}