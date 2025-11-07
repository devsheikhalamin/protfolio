import { useState, useEffect, useRef } from "react";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

// Hook for smooth fade from bottom
function useScrollFade() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

function SkillsSection() {
    const steps = [
        { id: 1, title: "HTML", desc: "Building semantic HTML structure for web pages.", icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
        { id: 2, title: "CSS", desc: "Styling beautiful and responsive web pages.", icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
        { id: 3, title: "Tailwind CSS", desc: "Creating modern, responsive designs quickly.", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
        { id: 4, title: "JavaScript", desc: "Adding interactivity and dynamic behavior to websites.", icon: <SiJavascript className="text-yellow-400 w-10 h-10" /> },
        { id: 5, title: "React", desc: "Building reusable components for modern web apps.", icon: <SiReact className="text-sky-500 w-10 h-10" /> },
        { id: 6, title: "Node.js", desc: "Server-side development with fast and scalable backends.", icon: <SiNodedotjs className="text-green-600 w-10 h-10" /> },
        { id: 7, title: "MongoDB", desc: "NoSQL database for flexible data storage.", icon: <SiMongodb className="text-green-700 w-10 h-10" /> },
        { id: 8, title: "Git", desc: "Version control for tracking changes and collaborating on projects.", icon: <SiGit className="text-red-500 w-10 h-10" /> },
    ];

    return (
        <section id="skills" className="dark:bg-background py-16 px-5">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center mt-5">
                <h2 className="text-5xl font-medium bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
                    Skills & Technologies
                </h2>
                <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    Technologies & Tools I Work With
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const fade = useScrollFade();
                        return (
                            <div
                                key={step.id}
                                ref={fade.ref}
                                className={`bg-white shadow-md rounded-2xl p-6 border border-purple-400 transform transition-all duration-700 ease-out will-change-transform will-change-opacity
                  ${fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 shadow-lg text-white text-3xl rounded-lg">
                                    {step.icon}
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-gray-800">{step.id}. {step.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
