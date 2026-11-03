import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

import { navLinks } from '../../data/site'

export default function Header() {
    const [activeSection, setActiveSection] = useState('top')
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id)
                }
            },
            {
                threshold: [0.2, 0.5, 0.8],
                rootMargin: '-20% 0px -60% 0px',
            }
        )

        sections.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)

        localStorage.setItem('theme', darkMode ? 'dark': 'light')
    }, [darkMode])

    return (
        <header className="absolute top-0 z-50 w-full bg-transparent">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <a
                    href="#top"
                    className="text-2xl font-black tracking-tight text-slate-900 transition hover:text-blue-600 dark:text-white"
                >
                    RON<span className="font-black text-blue-600">.</span>
                </a>

                <div className="flex items-center gap-2">
                    <nav
                        aria-label="Main"
                        className="hidden items-center gap-7 md:flex"
                    >
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '')
                            const isActive =
                                activeSection === sectionId

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-100 rounded-2xl px-2 dark:hover:bg-slate-800 ${
                                        isActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                                    }`}
                                >
                                    {link.label}

                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out dark:bg-blue-400 ${
                                            isActive
                                                ? 'w-full'
                                                : 'w-0'
                                        }`}
                                    />
                                </a>
                            )
                        })}
                    </nav>

                    <button
                        type="button"
                        onClick={() => setDarkMode((current) => !current)}
                        aria-label={
                            darkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-800"
                    >
                        {darkMode ? (
                            <Sun size={19} strokeWidth={2} />
                        ) : (
                            <Moon size={19} strokeWidth={2} />
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}