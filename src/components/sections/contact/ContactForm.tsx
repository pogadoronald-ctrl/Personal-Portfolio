
import { useRef, useState } from "react"
import type { FormEvent } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export default function ContactForm() {
    const captchaRef = useRef<HCaptcha>(null)

    const [captchaToken, setCaptchaToken] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("")
        setIsSuccess(false)

        if (!captchaToken) {
            setStatus("Please complete the CAPTCHA verification.")
            return
        }

        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)

        formData.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        )

        formData.set("subject", "New Portfolio Contact Message")
        formData.set("from_name", "Portfolio Contact Form")
        formData.set("h-captcha-response", captchaToken)

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            )

            const result = await response.json()

            if (result.success) {
                setStatus("Your message has been sent successfully!")
                setIsSuccess(true)
                formRef.current?.reset()
                setCaptchaToken("")
                captchaRef.current?.resetCaptcha()
            } else {
                setStatus(
                    result.message || "Something went wrong. Please try again."
                )
            }
        } catch {
            setStatus("Unable to send your message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="space-y-5 "
        >
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                    Your Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                    Your Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    maxLength={254}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                    Subject
                </label>
                <input
                    id="subject"
                    name="sender_subject"
                    type="text"
                    placeholder="What is this about?"
                    required
                    maxLength={150}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    minLength={10}
                    maxLength={3000}
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
            </div>

            <div className="overflow-hidden">
                <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={(token) => {
                        setCaptchaToken(token)
                    }}
                    onExpire={() => setCaptchaToken("")}
                    onError={() => setCaptchaToken("")}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
                <p
                    role="status"
                    aria-live="polite"
                    className={`text-center text-sm ${
                        isSuccess
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                    }`}
                >
                    {status}
                </p>
            )}
        </form>
    )
}
