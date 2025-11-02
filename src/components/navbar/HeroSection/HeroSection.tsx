import { useState, useEffect } from "react";

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

// CountUp Component
function CountUp({ end = 0, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 50);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 50);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
}

// HeroSection Component
function HeroSection() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowImage(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="w-full min-h-screen flex items-center dark:bg-background"
        >
            <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">

                {/* Left Content */}
                <div className="text-center md:text-left order-2 lg:order-1">
                    <h1 className="text-2xl font-semibold mb-1.5">Hello, I'm</h1>
                    <h5 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
                        Md Alamin Sheikh
                    </h5>
                    <p className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
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

                    <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed dark:text-white">
                        I'm a <span className="font-semibold text-gray-800 dark:text-amber-50">Frontend Developer</span>. I build responsive and scalable web applications using clean code and modern technologies.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 hover:from-purple-900 hover:via-fuchsia-800 transition-all duration-500 shadow-lg">
                            Say Hello!
                        </button>

                    </div>


                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-white border border-fuchsia-500 rounded-lg p-6 text-center hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900">
                                <CountUp end={15} /> Y.
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">Experience</p>
                        </div>
                        <div className="bg-white border border-fuchsia-500 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900">
                                <CountUp end={250} />+
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">Projects</p>
                        </div>
                        <div className="bg-white border border-fuchsia-500 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900">
                                <CountUp end={58} />
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center mt-15 md:justify-end order-1 lg:order-2">
                    <div
                        className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-purple-100 rounded-xl p-1 shadow-md transition-all duration-700 transform ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            } animate-float`}
                    >
                        <img
                            src="/images/sheikh.jpg"
                            alt="Profile"
                            className="w-full h-auto rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
