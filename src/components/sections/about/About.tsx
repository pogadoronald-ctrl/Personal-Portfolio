export default function About(){
    return(
        <section
            id='about'
            className="scroll-mt-16 relative overflow-hidden transition-colors duration-300 px-6 py-12 md:px-12 lg:px-20 dark:bg-slate-950"
        >
            <div className="flex mx-auto max-w-7xl justify-center">
                <div className="flex flex-col text-center mb-12">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-slate-100">
                        Discover
                    </p>
                    <h2 className="text-4xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
                        About Me
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        A glimpse into the person behind the code
                    </p>
                </div>
            </div>

        </section>
    )
}