
import { useState, useEffect } from 'react'

interface AboutGalleryProps {
    images: readonly string[]
    title: string
}

export default function AboutGallery({
    images,
    title,
}: AboutGalleryProps) {
    const [imageIndex, setImageIndex] = useState(0)

    const currentImageIndex = imageIndex % images.length

    const stackedImages =
        images.length > 1
            ? [{
                src: images[(currentImageIndex + 1) % images.length],
                index: 0,
            }]
            : []

    const handleNextImage = () => {
        setImageIndex((prev) => (prev + 1) % images.length)
    }

    useEffect(() => {
        const img = new Image()
        img.src = images[0]
    }, [images])

    return (
        <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5]">
                {stackedImages.map((image) => (
                    <div
                        key={image.index}
                        className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl dark:border-slate-800 dark:bg-slate-800"
                        style={{
                            zIndex: 10 - image.index,
                            transform:
                                image.index === 0
                                    ? 'translate(14px, -8px) rotate(4deg)'
                                    : 'translate(25px, -15px) rotate(8deg)',
                        }}
                    >
                        <img
                            src={image.src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="h-full w-full object-contain object-cover"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleNextImage}
                    disabled={images.length <= 1}
                    aria-label="View next photo"
                    className= "group absolute inset-0 z-20 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900 text-left transition-colors duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 disabled:cursor-default"
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className= "cursor-pointer h-full w-full object-cover"
                    />

                    {images.length > 1 && (
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            Click to explore
                            <span>
                                {currentImageIndex + 1} / {images.length}
                            </span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}
