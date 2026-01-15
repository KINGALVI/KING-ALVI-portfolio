import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Refresh AOS after Home and its children render
        setTimeout(() => {
            AOS.refresh();
        }, 0);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // 🕒 Set hidden time field before sending
        const timeField = e.target.querySelector("input[name='time']");
        if (timeField) {
            timeField.value = new Date().toLocaleString();
            // Example: "1/14/2026, 8:16 AM"
        }

        setLoading(true);

        emailjs
            .sendForm(
                "service_f22uywd",   // Service ID
                "template_re8jrwh",  // Template ID
                e.target,
                "R54s7bL5kCryAWJ3d"  // Public Key
            )
            .then(
                () => {
                    toast.success("✅ Your message has been sent successfully!");
                    setLoading(false);
                    e.target.reset();
                },
                () => {
                    toast.error("❌ Something went wrong. Please try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <form
            onSubmit={sendEmail}
            className="space-y-4 bg-[#1e2125] p-5 rounded shadow-lg my-auto flex-1 font-rubik lg:mt-7 mt-10 aos-init aos-animate"
            data-aos="flip-up"
        >
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <input
                        placeholder="Enter your full name"
                        name="fullName"
                        required
                        className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]"
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]"
                    />
                </div>
            </div>
            <div>
                <input
                    placeholder="Subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]"
                ></textarea>
            </div>

            {/* 🕒 Hidden field for timestamp */}
            <input type="hidden" name="time" />

            <button
                type="submit"
                disabled={loading}
                className="mt-4 flex items-center justify-center form-button text-gray-400 transition duration-300 hover:text-white font-bold px-6 py-2 rounded-full font-rajdhani disabled:opacity-50"
            >
                {loading ? (
                    <span className="loading loading-spinner loading-sm text-[#C778DD]"></span>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
};

export default ContactForm;