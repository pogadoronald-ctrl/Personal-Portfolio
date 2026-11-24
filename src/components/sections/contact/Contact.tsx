import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "./ContactForm"

export default function Contact(){
    return(
        <section 
            id='contact'
            className="scroll-mt-16 overflow-hidden px-6 py-20 md:px-12 lg:px-20 transition-colors duration-300 dark:bg-slate-950"
        >
            <div className="flex mx-auto max-w-7xl justify-center">
                <div className="flex flex-col mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-100">
                        Let's Talk
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
                        Contact Me
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Have a project in mind, a question, or an opportunity to share? I'd love to hear from you and explore how we can connect.
                    </p>
                </div>
            </div>

            
            <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 md:gap-8">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex justify-center">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            Contact Information
                        </h3>
                    </div>

                    <div className="mx-auto flex w-fit flex-col gap-7">
                        <div className="flex items-center gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                                <Mail size={22} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-md text-slate-500 dark:text-slate-400">Email</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200 ">
                                    pogado.ronald@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                                <Phone size={22} />
                            </div>
                            <div>
                                <p className="text-md text-slate-500 dark:text-slate-400">Phone Number</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200">
                                    09995022221
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-md text-slate-500 dark:text-slate-400">Location</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200">
                                    Cagayan de Oro City, Misamis Oriental, Philippines
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-8 gap-4">
                            <h3 className="text-lg font-semibold text-center text-slate-900 dark:text-white">
                                Connect with Me
                            </h3>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/pogadoronald-ctrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <i className="devicon-github-original text-4xl dark:text-white" />
                                </a>

                                <a
                                    href="https://linkedin.com/in/ronald-jhon-pogado-1290b33a8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="transition-transform duration-300 hover:-translate-y-1 "
                                >
                                    <i className="devicon-linkedin-plain colored text-4xl" />
                                </a>

                                <a
                                    href="https://www.facebook.com/ronald.pogado.2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="transition-transform duration-300 hover:-translate-y-1 "
                                >
                                    <i className="devicon-facebook-plain colored text-4xl" />
                                </a>
                            </div>

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