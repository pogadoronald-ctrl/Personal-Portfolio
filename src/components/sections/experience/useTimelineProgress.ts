
import { useEffect, useRef, useState } from "react"

export default function useTimelineProgress() {
    const timelineRef = useRef<HTMLDivElement>(null)
    const markerRefs = useRef<(HTMLDivElement | null)[]>([])

    const [timelineProgress, setTimelineProgress] = useState(0)
    const [activeMarkers, setActiveMarkers] = useState<boolean[]>([])

    useEffect(() => {
        const updateProgress = () => {
            if (!timelineRef.current) return

            const rect = timelineRef.current.getBoundingClientRect()
            const timelineTop = window.scrollY + rect.top
            const timelineHeight = rect.height
            const scrollPosition = window.scrollY + window.innerHeight * 0.3

            const progress = Math.min(
                Math.max(
                    (scrollPosition - timelineTop) / timelineHeight,
                    0
                ),
                1
            )

            setTimelineProgress(progress)
        }

        const updateMarkers = () => {
            const activationPoint = window.innerHeight * 0.3

            setActiveMarkers(
                markerRefs.current.map((marker) => {
                    if (!marker) return false

                    return marker.getBoundingClientRect().top <= activationPoint
                })
            )
        }

        const updateAll = () => {
            updateProgress()
            updateMarkers()
        }

        updateAll()

        window.addEventListener("scroll", updateAll, { passive: true })
        window.addEventListener("resize", updateAll)

        return () => {
            window.removeEventListener("scroll", updateAll)
            window.removeEventListener("resize", updateAll)
        }
    }, [])

    return {
        timelineRef,
        timelineProgress,
        markerRefs,
        activeMarkers
    }
}
