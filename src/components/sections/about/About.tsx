import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { aboutData, tabs, type TabId } from './aboutData'

export default function About(){
    const [activeTab, setActiveTab] = useState<TabId>('education')

    const content = aboutData[activeTab]
    return(
        <section
            id='about'
            className="scroll-mt-16 relative overflow-hidden transition-colors duration-300 px-6 py-12 md:px-12 lg:px-20 dark:bg-slate-950"
        >
            <div className="flex mx-auto max-w-7xl justify-center">
                <div className="flex flex-col text-center mb-8">
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

            <div className="mb-12 flex flex-wrap justify-center gap-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon
                    const isActive = activeTab === tab.id

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            role="tab"
                            aria-selected={isActive}
                            className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                            }`}
                        >
                            <Icon size={17} />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            <div
                    key={activeTab}
                    role="tabpanel"
                    className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                <div className="relative mx-auto w-full max-w-xl">
                    <div className="grid grid-cols-5 grid-rows-5 gap-3">
                        <div className="col-span-4 row-span-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                            <img
                                src={content.images[0]}
                                alt={content.title}
                                className="h-full min-h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            

            <div className="flex flex-col justify-center">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    {content.eyebrow}
                </p>

                <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
                    {content.title}
                </h3>

                <p className="mb-8 text-base leading-8 text-slate-600 dark:text-slate-400">
                    {content.description}
                </p>

                <div className="space-y-5">
                    {content.details.map((detail) => (
                        <div
                            key={detail.label}
                            className="flex flex-col gap-1 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800"
                        >
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {detail.label}
                            </span>

                            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-right">
                                {detail.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            </div>

        </section>
    )
}