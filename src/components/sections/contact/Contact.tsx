import { Mail, Phone, MapPin, FileText, ArrowDownToLine, ExternalLink } from "lucide-react"
import ContactForm from "./ContactForm"

export default function Contact(){
    return(
        <section 
            id='contact'
            className="scroll-mt-16 overflow-hidden px-6 py-20 md:px-12 lg:px-20 transition-colors duration-300 dark:bg-slate-950"
        >
            <div className="grid grid-cols-1 max-w-7xl mx-auto gap-12 md:grid-cols-2 md:gap-8">
                <div className="flex flex-col mt-8 gap-10">
                    <div className="flex flex-col">
                        <p className="mb-4 text-base font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-slate-100">
                            Contact Me
                        </p>

                        <h2 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
                            Let's Work Together!
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            Tell me whether you have a project in mind, an opportunity to share, or simply want to connect. I'm open to opportunities where I can contribute, collaborate, and explore how we can create something valuable together.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                                href="mailto:pogado.ronald@gmail.com"
                                className="flex items-center justify-between group rounded-xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-900 dark:hover:bg-slate-900"
                            >
                                <div className="flex flex-col gap-3">
                                    <Mail size={23} className="dark:text-blue-400" />
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            Email
                                        </p>
                                        <p className="break-all font-semibold text-slate-800 dark:text-slate-200">
                                            pogado.ronald@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <ExternalLink
                                    size={18}
                                    className="text-slate-400 transition-colors group-hover:text-blue-600"
                                />
                            </a>

                            <a
                                href="https://linkedin.com/in/ronald-jhon-pogado-1290b33a8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex group items-center justify-between rounded-xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-900 dark:hover:bg-slate-900"
                            >
                                <div className="flex flex-col gap-3"> 
                                    <i className="devicon-linkedin-plain text-2xl text-black dark:text-blue-400" />
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            LinkedIn
                                        </p>
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            View Profile
                                        </p>
                                    </div>
                                </div>
                                    <ExternalLink
                                        size={18}
                                        className="text-slate-400 transition-colors group-hover:text-blue-600"
                                    />
                            </a>

                            <a
                                href="https://github.com/pogadoronald-ctrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex group items-center justify-between rounded-xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-900 dark:hover:bg-slate-900"
                            >
                                <div className="flex flex-col gap-3"> 
                                    <i className="devicon-github-original  text-2xl text-slate-800 dark:text-blue-600" />
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            GitHub
                                        </p>
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            View Profile
                                        </p>
                                    </div>
                                </div>
                                <ExternalLink
                                    size={18}
                                    className="text-slate-400 transition-colors group-hover:text-blue-600"
                                />
                            </a>

                            <div className="flex flex-col transition-all duration-300 gap-3 rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                                <MapPin size={23} className="dark:text-blue-400" />
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Location
                                    </p>
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                                        Cagayan de Oro City, Misamis Oriental, Philippines
                                    </p>
                                </div>
                            </div>
                                <a
                                    href="/resume.pdf"
                                    download="Ronald_Pogado_Resume.pdf"
                                    className="group inline-flex justify-self-start items-center gap-2 rounded-4xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
                                >
                                    Download Resume
                                    <span className="transition-transform text-md duration-200 group-hover:translate-x-2">
                                        →
                                    </span>
                                </a>
                        </div>
                    </div>
                </div>

                    

                <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-colors duration-300 md:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                    <div className="flex flex-col items-center mb-6 ">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                            Send Me a Message
                        </h3>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}