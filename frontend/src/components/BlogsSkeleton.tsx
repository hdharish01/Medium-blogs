
export const BlogsSkeleton = () => {
    return (
        <div>
            <div>
            <div className="border-b px-10 flex justify-between py-4 animate-pulse">
            <div className="h-6 bg-slate-300 rounded w-24"></div>
            <div className="flex items-center">
                <div className="h-10 bg-slate-300 rounded-lg w-32 mr-8"></div>
                <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
            </div>
        </div>
        </div>
            <div className="flex justify-center mt-6">
                <div className="max-w-xl w-full mx-10 space-y-6">
                    {/* Skeleton Blog Cards */}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="border-b-2 py-2 border-slate-200 animate-pulse">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                                <div className="h-4 bg-slate-300 rounded w-1/4 ml-2"></div>
                                <div className="h-3 w-3 rounded-full bg-slate-300 mx-2"></div>
                                <div className="h-4 bg-slate-300 rounded w-1/4"></div>
                            </div>
                            <div className="h-6 bg-slate-300 rounded mt-2 w-3/4"></div>
                            <div className="h-4 bg-slate-200 rounded mt-2 w-full"></div>
                            <div className="h-4 bg-slate-200 rounded mt-1 w-5/6"></div>
                            <div className="h-4 bg-slate-200 rounded mt-1 w-2/3"></div>
                            <div className="h-4 bg-slate-300 rounded mt-8 w-1/3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}