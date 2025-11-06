import { useState, useEffect, useRef } from "react";

// TypingText Component
function TypingText({ texts = ["Hello World"], speed = 150, pause = 1000 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayedText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setDisplayedText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };
        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return <span>{displayedText}|</span>;
}

// Scroll Fade Hook
function useScrollFade() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

function HeroSection() {
    const textFade = useScrollFade();
    const imageFade = useScrollFade();

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:mt-10 mt-20 bg-white dark:bg-background">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12">

                {/* Image */}
                <div
                    ref={imageFade.ref}
                    className={`transition-all duration-1000 transform
            order-1 lg:order-2 flex justify-center md:justify-end
            ${imageFade.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
          `}
                >
                    <div className="w-72 sm:w-80 md:w-96 lg:w-[520px] bg-purple-100 rounded-xl p-1 shadow-md">
                        <img
                            src="/images/frond.jpg"
                            alt="Profile"
                            className="w-full h-auto rounded-md object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div
                    ref={textFade.ref}
                    className={`transition-all duration-1000 transform
            order-2 lg:order-1 flex flex-col text-center md:text-left
            ${textFade.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
          `}
                >
                    <h1 className="text-xl sm:text-2xl font-semibold mb-1.5 text-gray-700 dark:text-gray-100">
                        Hello, I'm
                    </h1>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-3">
                        Md Alamin Sheikh
                    </h2>

                    <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
                        <TypingText
                            texts={[
                                "Full Stack Web Developer",
                                "MERN Stack Web Developer",
                                "Frontend Developer",
                                "React JS Developer",
                            ]}
                            speed={150}
                            pause={1000}
                        />
                    </p>

                    <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed dark:text-gray-200">
                        I'm a{" "}
                        <span className="font-semibold text-gray-800 dark:text-amber-50">
                            Frontend Developer
                        </span>
                        I build responsive and scalable web apps using clean code and modern technologies like React, Tailwind CSS, and JavaScript, creating user-friendly designs for a great experience
                    </p>

                    {/* Download CV Button */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start">
                        <button className="flex items-center gap-2 px-14 lg:px-6 py-3 text-sm sm:text-lg font-medium border border-purple-500 cursor-pointer rounded-md hover:bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 transition-all duration-500 shadow-lg dark:text-white hover:text-white hover:scale-105 active:scale-95" onClick={() => { const link = document.createElement("a"); link.href = "/images/Alamin_Sheikh_Web_Developer_CV.pdf"; link.download = "Alamin_Sheikh_Web_Developer_CV.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} > {/* Animated Download Icon */} <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="flex-shrink-0" > <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" > <path fill="currentColor" fillOpacity="0" strokeDasharray="20" strokeDashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5" > <animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5; M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5; M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5" /> <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" /> <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" /> </path> <path strokeDasharray="14" strokeDashoffset="14" d="M6 19h12" > <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" /> </path> </g> </svg> <span>Download CV</span> </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;
