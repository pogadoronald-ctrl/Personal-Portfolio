export default function WaveBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 600"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M-100 160 C200 50 400 350 720 200 S1200 50 1540 200"
                    className="wave-line wave-one"
                />

                <path
                    d="M-100 240 C200 130 400 430 720 280 S1200 130 1540 280"
                    className="wave-line wave-two"
                />

                <path
                    d="M-100 330 C200 210 400 510 720 360 S1200 210 1540 360"
                    className="wave-line wave-three"
                />

                <path
                    d="M-100 420 C200 290 400 590 720 440 S1200 290 1540 440"
                    className="wave-line wave-four"
                />

                <path
                    d="M-100 510 C200 370 400 670 720 520 S1200 370 1540 520"
                    className="wave-line wave-five"
                />  
            </svg>
        </div>
    )
}