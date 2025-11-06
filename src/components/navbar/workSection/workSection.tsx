import { useState, useEffect, useRef } from "react";
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

function WorkSection() {
    const steps = [
        { id: 1, title: "Research", desc: "We start with in-depth research and analysis to ensure the foundation is solid.", icon: "🔍" },
        { id: 2, title: "Planning", desc: "Creating a clear roadmap and strategy before execution.", icon: "📝" },
        { id: 3, title: "Design", desc: "Crafting beautiful and user-friendly designs that stand out.", icon: "🎨" },
        { id: 4, title: "Development", desc: "Turning designs into functional, scalable, and fast applications.", icon: "💻" },
    ];

    return (
        <section id="Work" className="dark:bg-background py-16 px-5">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center mt-5">
                <h2 className="text-5xl font-medium bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mt-4">
                    Work Process
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
                                ${fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 text-white text-2xl rounded-lg shadow-lg">
                                    {step.icon}
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-gray-800">
                                    {step.id}. {step.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
