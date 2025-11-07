import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";

// Custom Hook: scroll fade animation
function useScrollFade() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 } // 20% visible triggers
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

const socialLinks = [
    { icon: FaYoutube, url: "https://www.youtube.com/" },
    { icon: FaFacebook, url: "https://www.facebook.com/alaminshekh4321" },
    { icon: FaWhatsapp, url: "https://whatsapp.com/dl/" },
    { icon: FaTelegram, url: "https://telegram.org/dl" },
];

function AboutSection() {
    const textFade = useScrollFade();
    const imageFade = useScrollFade();

    return (
        <section
            id="About"
            className="dark:bg-background py-16 sm:py-20 md:py-24 overflow-x-hidden w-full"
        >
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="lg:text-5xl text-4xl font-bold lg:font-medium bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
                        About Me
                    </h2>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 overflow-hidden w-full">

                    {/* Image (fade-in from left) */}
                    <div
                        ref={imageFade.ref}
                        className={`flex justify-center md:justify-start transition-all duration-1000 transform ${imageFade.isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <div className="w-full max-w-[480px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] bg-purple-100 rounded-xl p-1 shadow-md overflow-hidden">
                            <img
                                src="/images/alamin-4.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-md object-cover max-w-full"
                            />
                        </div>
                    </div>

                    {/* Text (fade-in from right) */}
                    <div
                        ref={textFade.ref}
                        className={`flex-1 text-center md:text-left transition-all duration-1000 transform ${textFade.isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10"
                            }`}
                        style={{ transitionDelay: "0.3s" }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10">
                            I am{" "}
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-purple-500 bg-clip-text text-transparent mt-3">
                                Web Developer
                            </span>
                        </h2>

                        <p className="mb-10 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed dark:text-gray-200 px-2 sm:px-0">
                            <strong>Hi! My name is Alamin Sheikh</strong> — a passionate Frontend Developer who loves building beautiful, interactive, and user-friendly web applications using modern tools like React, Tailwind CSS, and JavaScript.
                            <br />
                            <br />
                            I enjoy crafting smooth UI experiences and writing clean, maintainable code. I’m also learning backend technologies to become a complete full-stack developer.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-2xl justify-center md:justify-start flex-wrap">
                            {socialLinks.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={i}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
