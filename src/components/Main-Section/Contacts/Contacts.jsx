import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import MyPhoto_2 from "../../../../public/Images/My-Photo-2.png";
import Dots from "../../../../public/Images/Dots.png";
import SecoendDedication from "../../../../public/Images/My-Dedication-2.png";

const Contacts = () => {

    return (
        <>
            <section className="mb-10 mt-10 ms-3">
                <div className="flex items-center gap-3">
                    <h1 className="md:text-4xl text-3xl">
                        <span className="text-[#C778DD]">#</span>Contacts
                    </h1>
                    <div>
                        <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[510px] w-40"></div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="md:text-4xl text-2xl text-center mb-10 mt-5">Get in Touch With Me</h2>
                </div>

                <div className="w-11/12 mx-auto flex lg:flex-row lg:justify-between flex-col justify-center">
                    <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left my-auto">
                        <div className="w-11/12 mx-auto my-auto md:w-md">
                            <div className="gird mb-5">
                                <figure className="grid justify-center" style={{ position: "relative" }}>
                                    <img
                                        src={MyPhoto_2}
                                        alt="My Photo"
                                        className="Background-Image-2 w-[315px] h-[450px] block"
                                    />
                                    <img className="Dots-Image-2" src={Dots} alt="" />
                                </figure>
                                <div className="flex justify-center">
                                    <img
                                        src={SecoendDedication}
                                        alt="Dedication quote"
                                        className="relative block"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-auto justify-center mt-4 font-rubik">
                            <div className="flex gap-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#C778DD] my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                                </svg>
                                <p className="flex items-center gap-2">Dhaka, Bangladesh </p>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#C778DD] my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path>
                                </svg>
                                <p className="flex items-center gap-2">+8801893080578</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#C778DD] my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                                </svg>
                                <p className="flex items-center gap-2">alvialmahamud@gmail.com</p>
                            </div>
                        </div>
                        <div className="mx-auto mt-6">
                            <h2 className="text-xl text-center text-[#C778DD] font-semibold font-rajdhani mb-3">Find Me Online:</h2>
                            <div className="flex justify-center md:justify-start gap-4 my-4 md:my-0">
                                <div className="bg-base-200 group hover:bg-[#c52fee] p-2 rounded-full transition-colors duration-300">
                                    <a href="https://www.facebook.com/alvi.al.mahamud/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="w-6 h-6 text-[#ABB2BF] group-hover:text-white Logo" /></a>
                                </div>
                                <div className="bg-base-200 group hover:bg-[#c52fee] p-2 rounded-full transition-colors duration-300">
                                    <a href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-6 h-6 text-[#ABB2BF] group-hover:text-white Logo" /></a>
                                </div>
                                <div className="bg-base-200 group hover:bg-[#c52fee] p-2 rounded-full transition-colors duration-300">
                                    <a href="https://github.com/KINGALVI" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-[#ABB2BF] group-hover:text-white Logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-4 bg-[#1e2125] p-5 rounded shadow-lg my-auto flex-1 font-rubik mt-10">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <input placeholder="Enter your full name" className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]" name="fullName" />
                            </div>
                            <div className="flex-1">
                                <input placeholder="Enter your email" className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]" name="email" />
                            </div>
                        </div>
                        <div>
                            <input placeholder="Subject" className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]" name="subject" />
                        </div>
                        <div>
                            <textarea name="message" rows="5" placeholder="Write your message..." className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#c52fee]"></textarea>
                        </div>
                        <button type="submit" className="mt-4 flex items-center justify-center form-button text-gray-400 transition duration-300 hover:text-white font-bold px-6 py-2 rounded-full font-rajdhani">Send Message</button>
                    </form>
                </div >
            </section>
        </>
    );
};

export default Contacts;