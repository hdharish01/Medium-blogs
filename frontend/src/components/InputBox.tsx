interface InputBoxType {
    label: string;
    placeholder: string;
    onChange: (e:any) => void;
    type?: string;
}


export const InputBox = ({label,placeholder,onChange,type}:InputBoxType) => {
    return <div className="w-80 mx-auto mt-4">
        <div className="flex justify-start">
            <label className="block mb-2 text-sm font-medium text-cyan-800 dark:text-white">{label}</label>
        </div>
        <div>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-cyan-50 border border-sky-200 text-cyan-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-80 p-2.5 " placeholder={placeholder}/>
        </div>
    </div>
}

