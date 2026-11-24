import AboutGallery from "./AboutGallery"
import { outsideData } from "./aboutData"
export default function OutsideScreen(){
    return(
        <>
            <AboutGallery
                images= {outsideData.images}
                title={outsideData.title}
            />

            <div className="flex flex-col justify-start">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    {outsideData.eyebrow}
                </p>

                <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
                    {outsideData.title}
                </h3>

                <p className="mb-8 text-base leading-8 text-slate-600 dark:text-slate-400">
                    {outsideData.description}
                </p>
            </div>
        </>
    )
}