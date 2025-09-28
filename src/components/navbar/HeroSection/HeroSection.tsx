

import { useState, useEffect } from "react";

// Typing Text Component
function TypingText({ text = "", speed = 150 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(text.substring(0, index + 1));
                setIndex(index + 1);
                if (index + 1 === text.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayedText(text.substring(0, index - 1));
                setIndex(index - 1);
                if (index - 1 === 0) setIsDeleting(false);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed]);

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

// Hero Section
function HeroSection() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowImage(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 py-14 mt-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        <TypingText text="Hello, I’m Alamin Sheikh" speed={150} />
                    </h2>

                    <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                        I'm a Freelance <span className="font-semibold text-gray-800">UI/UX Designer</span> and <span className="font-semibold text-gray-800">Developer</span> based in London, England.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
                            Say Hello!
                        </button>
                    </div>

                    {/* Stats with CountUp */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900"><CountUp end={15} /> Y.</h4>
                            <p className="text-sm text-gray-600 mt-1">Experience</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900"><CountUp end={250} />+</h4>
                            <p className="text-sm text-gray-600 mt-1">Projects</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold text-gray-900"><CountUp end={58} /></h4>
                            <p className="text-sm text-gray-600 mt-1">Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <div className={`w-full max-w-sm md:max-w-md lg:max-w-lg bg-indigo-100 rounded-xl p-3 shadow-md transition-all duration-700 transform ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        } animate-float`}>
                        <img
                            src="/images/alamin-1.jpg"
                            alt="Profile"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

