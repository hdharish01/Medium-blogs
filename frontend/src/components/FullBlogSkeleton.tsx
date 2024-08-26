export const FullBlogSkeleton = () => {
    return (
        <div>
            <div className="border-b px-10 flex justify-between py-4 animate-pulse">
            <div className="h-6 bg-slate-300 rounded w-24"></div>
            <div className="flex items-center">
                <div className="h-10 bg-slate-300 rounded-lg w-32 mr-8"></div>
                <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
            </div>
        </div>
            <div className="grid grid-cols-12 gap-4 px-10 pt-10 max-w-screen-xl mx-auto animate-pulse">
                <div className="col-span-8">
                    <div className="h-12 bg-slate-300 rounded"></div>
                    <div className="h-4 bg-slate-200 mt-2 rounded"></div>
                    <div className="h-4 bg-slate-200 mt-1 w-1/3 rounded"></div>
                    <div className="mt-4 space-y-2">
                        <div className="h-6 bg-slate-200 rounded"></div>
                        <div className="h-6 bg-slate-200 rounded"></div>
                        <div className="h-6 bg-slate-200 rounded"></div>
                        <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="h-5 bg-slate-300 rounded w-1/4"></div>
                    <div className="flex mt-4">
                        <div className="flex flex-col justify-center">
                            <div className="w-16 h-16 bg-slate-300 rounded-full"></div>
                        </div>
                        <div className="pl-4">
                            <div className="h-6 bg-slate-300 rounded w-1/2"></div>
                            <div className="h-4 bg-slate-200 mt-2 rounded w-full"></div>
                            <div className="h-4 bg-slate-200 mt-1 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}