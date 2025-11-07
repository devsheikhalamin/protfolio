// EducationTimeline.tsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface EducationItem {
    logo: string;
    institution: string;
    degree: string;
    duration: string;
    description: string;
    link?: string;
}

const educationData: EducationItem[] = [
    {
        logo: "/images/ahmad-logo.jpeg",
        institution: "Ahmad's Education IT Institute",
        degree: "Web Development",
        duration: "April 2025 - Current",
        description:
            "I am learning Web Development at Ahmad's Education IT Institute and I also completed 2 month's Spoken English course from here.",
        link: "https://www.facebook.com/AhmadsEducation/",
    },
    {
        logo: "/images/jwma.jpeg",
        institution: "Jameul Uloom Mirpur-14",
        degree: "Masters of Arabic (M.A.) in Dawra-e-Hadith",
        duration: "2021 - 2024",
        description:
            "I have successfully completed Dawra-e-Hadith, equivalent to a Master’s degree, from this madrasa, having studied extensively from Sharh-e-Bekaya all the way through to Dawra-e-Hadith.",
        link: "https://www.facebook.com/jameul.uloom.mirpur14",
    },
    {
        logo: "/images/jjj.jpg",
        institution: "Jameya Kashfulul Madhupur Madrasaha",
        degree: "(B.A.)",
        duration: "2015 - 2021",
        description:
            "I pursued my studies at this madrasa from the Urdu Khana level up to Kafiya. Throughout my academic journey, I dedicated myself sincerely to learning and understanding, and eventually, I graduated from here with honor and distinction.",
        link: "https://www.facebook.com/p/your-link-here",
    },
    {
        logo: "/images/jamalpur.jpg",
        institution: "Jamia Arabia Minhazul Uloom Jamalpur",
        degree: "(S.S.C.)",
        duration: "2011 - 2015",
        description:
            "I pursued my studies at this madrasa from the Urdu Khana level up to Kafiya. Throughout my academic journey, I dedicated myself sincerely to learning and understanding, and eventually, I graduated from here with honor and distinction.",
        link: "https://www.facebook.com/p/your-link-here",
    },
];

const EducationTimeline = () => {
    return (
        <section id="Education" className="w-full overflow-x-hidden bg-white dark:bg-background py-16 sm:py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="lg:text-5xl text-4xl font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent">
                        Education
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2">
                    {educationData.map((edu, index) => {
                        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
                        const controls = useAnimation();

                        useEffect(() => {
                            if (inView) controls.start("visible");
                        }, [controls, inView]);

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.8, ease: "easeOut" },
                                    },
                                }}
                                className="flex flex-col sm:flex-row items-center sm:items-start p-5 border rounded-2xl border-purple-400 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-500"
                            >
                                {/* Logo */}
                                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-5">
                                    <img
                                        src={edu.logo}
                                        alt={edu.institution}
                                        className="w-16 h-16 rounded-full object-cover border border-purple-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center sm:text-left">
                                    {edu.link ? (
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:underline">
                                            <a href={edu.link} target="_blank" rel="noopener noreferrer">
                                                {edu.institution}
                                            </a>
                                        </h3>
                                    ) : (
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                                            {edu.institution}
                                        </h3>
                                    )}
                                    <p className="text-gray-800 dark:text-gray-300">{edu.degree}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationTimeline;
