
function WorkSection() {
    const steps = [
        {
            id: 1,
            title: "Research",
            desc: "We start with in-depth research and analysis to ensure the foundation is solid.",
            icon: "🔍",
        },
        {
            id: 2,
            title: "Planning",
            desc: "Creating a clear roadmap and strategy before execution.",
            icon: "📝",
        },
        {
            id: 3,
            title: "Design",
            desc: "Crafting beautiful and user-friendly designs that stand out.",
            icon: "🎨",
        },
        {
            id: 4,
            title: "Development",
            desc: "Turning designs into functional, scalable, and fast applications.",
            icon: "💻",
        },
    ];

    return (
        <section id="Work" className="bg-emerald-50 dark:bg-background py-16 px-5">
            <style>
                {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
          .wiggle:hover {
            animation: wiggle 0.3s ease-in-out infinite;
          }
        `}
            </style>

            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center mt-5">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-emerald-800 dark:text-white">
                    Work Process
                </h2>
                <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    Technologies & Tools I Work With
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="wiggle bg-white shadow-md rounded-2xl p-6 border border-emerald-200 transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-emerald-600 text-white text-2xl rounded-lg">
                                {step.icon}
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-gray-800">
                                {step.id}. {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
