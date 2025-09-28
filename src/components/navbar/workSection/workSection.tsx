
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
        <section id="process" className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 py-16">
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                    Work Process
                </h2>
                <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                    We follow a structured process to deliver quality work that meets expectations.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="wiggle bg-white shadow-md rounded-2xl p-6 border border-purple-200 transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-600 text-white text-2xl rounded-lg">
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
