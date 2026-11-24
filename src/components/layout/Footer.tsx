import { navLinks } from '../../data/site'
import { Mail, ArrowUp } from "lucide-react"

export default function Footer(){
    return(
        <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    <div>
                        <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
                            RON<span className="text-blue-600">.</span>
                        </a>

                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            Building meaningful digital experiences through code, creativity, and continuous learning.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Explore
                        </h3>

                        <ul className="space-y-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className='inline-block hover:text-blue-600 transition-all duration-300 hover:translate-x-1 dark:hover:text-cyan-400'
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 md:text-center">
                            Connect 
                        </h3>

                        <div className="flex gap-4">
                            <a 
                                href="https://github.com/pogadoronald-ctrl" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub"
                                className="transition-transform duration-300 hover:-translate-y-1">
                                <i className="devicon-github-original text-3xl dark:text-white" />
                            </a>

                            <a 
                                href="https://linkedin.com/in/ronald-jhon-pogado-1290b33a8" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn"
                                className='hover:-translate-y-1 duration-300 transition-transform'>
                                <i className="devicon-linkedin-plain colored text-3xl" />
                            </a>

                            <a href="pogado.ronald@email.com" aria-label="Email"
                                className="inline-block text-black dark:text-gray-400  transition-transform hover:-translate-y-1 duration-300">
                                <Mail size={32} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        © 2026 Ronald Pogado. All rights reserved.
                    </p>

                    <a href="#home" aria-label="Back to top"
                        className="group flex flex-row gap-2 justify-center items-center">
                        <p className='text-sm text-slate-500 transition-transform duration-300 font-medium group-hover:text-blue-600 dark:group-hover:text-white'>
                            Back to top
                        </p>
                        <div className='text-blue-600 transition-transform duration-300 group-hover:-translate-y-1 transition-all duration-300 dark:text-cyan-300'>
                            <ArrowUp size={14} />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}