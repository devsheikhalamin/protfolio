import React, { useState, useEffect } from "react";

function AboutSection() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowImage(true), 500); // 500ms পরে image আসবে
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="bg-gradient-to-r from-pink-50 via-yellow-50 to-orange-50 py-20">
            <div className="max-w-screen-xl mx-auto px-6">

                {/* About Me Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-[33px] sm:text-[35px] font-extrabold text-gray-900">
                        About Me
                    </h1>
                </div>

                {/* Content */}
                <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-start">
                        <div
                            className={`w-full max-w-sm md:max-w-md lg:max-w-lg bg-green-50 rounded-xl p-3 shadow-md animate-float transition-all duration-700 transform ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <img
                                src="/images/user-1.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Left Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            I am <span className="text-purple-500">Web Developer</span>
                        </h2>
                        <p className="mt-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                            I am a professional User Experience Designer and Developer. I specialize in creating stylish, modern websites, web services, and online stores.
                            My passion is to design digital user experiences that are intuitive, immersive, and visually appealing.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                            <a href="https://github.com/devsheikhalamin" className="px-6 py-3 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 transition">
                                My GitHub
                            </a>
                            <button className="mt-3 sm:mt-0 px-6 py-3 hover:text-white text-gray-800 rounded-md border border-gray-300 shadow-sm hover:bg-purple-500 transition">
                                Download CV
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;
