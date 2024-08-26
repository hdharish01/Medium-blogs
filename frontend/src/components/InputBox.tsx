interface InputBoxType {
    label: string;
    placeholder: string;
    onChange: (e:any) => void;
    type?: string;
}


export const InputBox = ({label,placeholder,onChange,type}:InputBoxType) => {
    return <div className="w-80 mx-auto mt-2">
        <div className="flex justify-start">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        </div>
        <div>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 " placeholder={placeholder}/>
        </div>
    </div>
}

