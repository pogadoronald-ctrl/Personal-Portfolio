export default function Projects(){
    return(
        <>
        <section 
            id='projects' 
            className="px-6 py-20 md:px-12 lg:px-20 dark:bg-slate-950"
        >
            <div className="flex mx-auto max-w-7xl justify-center">
                <div className="flex flex-col mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-100">
                        Featured Projects
                    </p>
                    <h2 className="text-4xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
                        Things I've Built
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Projects showcasing my skills in web development, problem solving, and building practical applications.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                
            </div>
        </section>
        </>
    )
}