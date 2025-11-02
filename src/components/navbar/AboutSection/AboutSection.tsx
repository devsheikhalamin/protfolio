import { useState, useEffect } from "react";

function AboutSection() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowImage(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="About" className="dark:bg-background">
            <div className="max-w-screen-xl mx-auto px-2 py-8 pb-16 sm:px-6 lg:px-8">

                {/* About Me Heading */}
                <div className="text-center mb-10">
                    <h5 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent">
                        About Me
                    </h5>
                </div>

                {/* Content */}
                <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-start px-1 md:px-0">
                        <div
                            className={`w-full max-w-sm md:max-w-md lg:max-w-lg bg-purple-100 rounded-md p-1 shadow-md animate-float transition-all duration-700 transform ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <img
                                src="/images/lll.jpg"
                                alt="Profile"
                                className="w-full h-96 rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Left Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10">
                            I am <span className="bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent">Web Developer</span>
                        </h2>
                        <p className="mb-8 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed dark:text-white">
                            I am a professional User Experience Designer and Developer. I specialize in creating stylish, modern websites, web services, and online stores.
                            My passion is to design digital user experiences that are intuitive,and visually appealing.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 px-5 lg:px-0 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/md-alamin-sheikh/" className="px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 hover:from-purple-900 hover:via-fuchsia-800  text-white rounded-md shadow-sm hover:bg-white text-center hover:text-white">
                                My Linkedin
                            </a>
                            <button
                                className="mt-3 sm:mt-0 px-6 py-3 border border-purple-500 rounded-md hover:bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 transition-all duration-500 shadow-lg dark:text-white hover:text-white"
                                onClick={() => window.open('/images/Alamin_Sheikh_Web_Developer_CV.pdf', '_blank')}
                            >
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