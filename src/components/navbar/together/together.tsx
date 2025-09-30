function Together() {
    return (
        <>
            <div className="relative w-full  overflow-hidden py-20">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-purple-100 dark:bg-background"></div>

                <div className="relative text-center max-w-5xl mx-auto">
                    <h4 className="text-[30px] md:text-[36px] font-extrabold text-gray-800 leading-snug dark:text-white">
                        Do you have a Project Idea? Let’s discuss your project!
                    </h4>
                    <p className="text-[15px] md:text-[17px] text-gray-600 mt-4 px-4 md:px-10 leading-relaxed dark:text-white">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-3 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-all duration-300">
                            Let’s work Together
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Together;
