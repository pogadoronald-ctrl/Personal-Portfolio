
import { useState } from 'react'
import { X } from 'lucide-react'
import { certificateData } from './aboutData'

export default function Certificate() {
    const [selectedCertificate, setSelectedCertificate] = useState<
        (typeof certificateData)[number] | null
    >(null)

    return (
        <>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                {certificateData.map((certificate) => (
                    <article
                        key={certificate.name}
                        className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/50"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedCertificate(certificate)}
                            className="group relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800"
                            aria-label={`Preview ${certificate.name}`}
                        >
                            <img
                                src={certificate.image}
                                alt={`${certificate.name} certificate`}
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />

                            <span className="cursor-pointer absolute inset-0 flex items-center justify-center bg-slate-950/0 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:bg-slate-950/40 group-hover:opacity-100">
                                View certificate
                            </span>
                        </button>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                {certificate.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                                {certificate.issuer}
                                <span className="mx-2 text-slate-400">·</span>
                                {certificate.date}
                            </p>

                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                {certificate.description}
                            </p>

                            <div className='mt-2 border-t border-slate-200 dark:border-slate-800'> 
                                {certificate.link && (
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 rounded-lg p-2 hover:bg-blue-100 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        View credential
                                        <span aria-hidden="true"> →</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${selectedCertificate.name} preview`}
                        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-white p-4 shadow-2xl dark:bg-slate-900 sm:p-6"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <div className="flex flex-col min-h-0 flex-1 overflow-auto rounded-xl bg-slate-100 p-2 dark:bg-slate-950">
                            <div className='flex justify-end'>
                                <button
                                    type="button"
                                    onClick={() => setSelectedCertificate(null)}
                                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                    aria-label="Close preview"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <img
                                src={selectedCertificate.image}
                                alt={`${selectedCertificate.name} certificate full preview`}
                                className="mb-6 max-h-[70vh] max-w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
