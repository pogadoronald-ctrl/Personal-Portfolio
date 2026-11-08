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
                    d="M-100 100 C200 70 400 230 720 200 S1200 70 1540 100"
                    className="wave-line wave-one"
                />

                <path
                    d="M-100 200 C200 170 400 330 720 300 S1200 170 1540 200"
                    className="wave-line wave-two"
                />

                <path
                    d="M-100 300 C200 270 400 430 720 400 S1200 270 1540 300"
                    className="wave-line wave-three"
                />

                <path
                    d="M-100 400 C200 370 400 530 720 500 S1200 370 1540 400"
                    className="wave-line wave-four"
                />

                <path
                    d="M-100 500 C200 470 400 630 720 600 S1200 470 1540 500"
                    className="wave-line wave-five"
                />  
            </svg>
        </div>
    )
}