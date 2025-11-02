import { useState, useEffect } from "react";

function AboutSection() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowImage(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="About" className="bg-emerald-50 dark:bg-background">
            <div className="max-w-screen-xl mx-auto px-2 py-8 pb-16 sm:px-6 lg:px-8">

                {/* About Me Heading */}
                <div className="text-center mb-10">
                    <h5 className="text-2xl sm:text-5xl text-emerald-800 font-bold dark:text-white">
                        About Me
                    </h5>
                </div>

                {/* Content */}
                <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-start">
                        <div
                            className={`w-full max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-md p-3 shadow-md animate-float transition-all duration-700 transform ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <img
                                src="/images/ll.jpg"
                                alt="Profile"
                                className="w-full h-96 rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Left Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10">
                            I am <span className="text-emerald-800 dark:text-emerald-800">Web Developer</span>
                        </h2>
                        <p className="mb-8 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed dark:text-white">
                            I am a professional User Experience Designer and Developer. I specialize in creating stylish, modern websites, web services, and online stores.
                            My passion is to design digital user experiences that are intuitive,and visually appealing.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/md-alamin-sheikh/" className="px-6 py-3 bg-emerald-800 text-white rounded-md shadow-sm hover:bg-white hover:text-black transition">
                                My Linkedin
                            </a>
                            <button className="mt-3 sm:mt-0 px-6 py-3 hover:text-white text-gray-800 rounded-md border border-gray-300 shadow-sm hover:bg-emerald-800 transition dark:text-white">
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
