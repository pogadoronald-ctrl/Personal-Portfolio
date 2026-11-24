import { useState } from 'react'
import {
    educationData,
    tabs,
    type TabId,
} from './aboutData'
import AboutGallery from './AboutGallery'
import Certificate from './Certificate'
import OutsideScreen from './OutsideScreen'

export default function About(){
    const [activeTab, setActiveTab] = useState<TabId>('education')

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
                            onClick={() => {setActiveTab(tab.id)}}
                            role="tab"
                            aria-selected={isActive}
                            className={`cursor-pointer flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
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
                    className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                {activeTab === 'education' && (
                    <>
                        <AboutGallery
                            images={educationData.images}
                            title={educationData.title}
                        />

                        <div className="flex flex-col justify-start">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                                {educationData.eyebrow}
                            </p>

                            <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
                                {educationData.title}
                            </h3>

                            <p className="mb-8 text-base leading-8 text-slate-600 dark:text-slate-400">
                                {educationData.description}
                            </p>

                            <div className="space-y-5">
                                {educationData.details.map((detail) => (
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
                    </>
                )}

                {activeTab === 'certificates' && (
                    <Certificate />
                )}

                {activeTab === 'outside' && (
                    <OutsideScreen />
                )}
            </div>

        </section>
    )
}