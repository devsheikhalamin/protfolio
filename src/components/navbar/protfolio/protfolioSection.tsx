import { motion } from "framer-motion";

function PortfolioSection() {
    const boxes = [
        {
            id: 1,
            title: "Personal Portfolio",
            category: "UI-UX DESIGN",
            img: "/images/protfolio.png",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
            bg: "bg-emerald-100 border border-gray-100",
            link: "https://protfolio-rho-steel.vercel.app/"
        },
        {
            id: 2,
            title: "Blog website",
            category: "WEB DESIGN",
            img: "/images/blog.png",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
            bg: "bg-emerald-100 border border-gray-100",
            link: "https://blog-project-rouge.vercel.app/"
        },
        {
            id: 3,
            title: "Library Management",
            category: "APP DESIGN",
            img: "/images/library.png",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
            bg: "bg-emerald-100 border border-gray-100",
            link: "https://library-wzl6.vercel.app/"
        },
        {
            id: 4,
            title: "Madrasa Website",
            category: "UI/UX",
            img: "/images/madrasa.png",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
            bg: "bg-emerald-100 border border-gray-100",
            link: "https://simple-seven-phi.vercel.app/"
        },
    ];

    // Animation variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <div id="Project" className="bg-emerald-50 dark:bg-background py-10">
            <div className="text-center">
                <h3 className=" mb-6 text-2xl sm:text-3xl md:text-5xl font-extrabold text-emerald-800 dark:text-white">My Project</h3>
                <p className="mb-6 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    Check out some of our latest projects below.
                </p>
            </div>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 justify-items-center px-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {boxes.map((box) => (
                    <motion.div
                        key={box.id}
                        className={`${box.bg} rounded-2xl shadow-md min-h-[500px] flex flex-col justify-between p-3 cursor-pointer`}
                        variants={item}
                        whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            className="w-full h-[200px] object-cover rounded-md mt-1.5"
                            src={box.img}
                            alt={box.title}
                        />

                        <p className="text-[16px] text-gray-500 text-center mt-2 ">{box.category}</p>
                        <p className="text-[19px] font-bold text-center mt-1 dark:text-gray-600">{box.title}</p>
                        <p className="text-[15px] text-gray-600 text-center mt-2 px-2">{box.desc}</p>
                        <div className="border border-gray-600 rounded-md py-2 px-4 w-40 mx-auto mt-5 mb-4 cursor-pointer transition-colors duration-300 hover:bg-emerald-800 hover:text-white">
                            <a href={box.link} target="_blank" rel="noopener noreferrer">
                                <button className="w-full text-center text-gray-600 hover:text-white">Case Study</button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* More Projects Button */}
            <div className="text-center mt-12 pb-6">
                <button className="border-0 text-white px-14 py-3 bg-emerald-800 rounded-md hover:bg-emerald-800 hover:scale-105 transition-all duration-300 text-lg">
                    More Projects
                </button>
            </div>
        </div>
    );
}

export default PortfolioSection;
