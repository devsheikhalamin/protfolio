import { motion } from "framer-motion";

function PortfolioSection() {
    const boxes = [
        { id: 1, title: "Product Admin Dashboard", category: "UI-UX DESIGN", img: "/images/project-4.jpg", desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.", bg: "bg-gradient-to-br from-purple-100 to-purple-200" },
        { id: 2, title: "E-Commerce Website", category: "WEB DESIGN", img: "/images/project-5.jpg", desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.", bg: "bg-gradient-to-br from-pink-100 to-pink-200" },
        { id: 3, title: "Mobile App UI", category: "APP DESIGN", img: "/images/project-2.jpg", desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.", bg: "bg-gradient-to-br from-cyan-100 to-cyan-200" },
        { id: 4, title: "Dashboard Analytics", category: "UI/UX", img: "/images/project-6.jpg", desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.", bg: "bg-gradient-to-br from-green-100 to-green-200" },
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
        <div id="project" className="bg-gray-100 px-3 sm:px-4 md:px-6 py-3">
            <div className="text-center mt-10">
                <h3 className="text-[31px] sm:text-[35px] font-extrabold">My Project</h3>
                <p className="text-[20px] text-gray-700 p-1 sm:px-6 md:px-16 md:py-6">
                    Check out some of our latest projects below.
                </p>
            </div>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-3 justify-items-center"
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
                            className="w-full h-[220px] object-cover rounded-md mt-1.5"
                            src={box.img}
                            alt={box.title}
                        />

                        <p className="text-[13px] text-gray-500 text-center mt-2">{box.category}</p>
                        <p className="text-[16px] font-bold text-center mt-1">{box.title}</p>
                        <p className="text-[13px] text-gray-600 text-center mt-2 px-2">{box.desc}</p>
                        <div className="border border-gray-600 rounded-md py-2 px-4 w-40 mx-auto mt-5 mb-4 cursor-pointer transition-colors duration-300 hover:bg-purple-500 hover:text-white">
                            <button className="w-full text-center">Case Study</button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* More Projects Button */}
            <div className="text-center mt-12 pb-6">
                <button className="border-0 text-white px-14 py-3 bg-purple-500 rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300 text-lg">
                    More Projects
                </button>
            </div>
        </div>
    );
}

export default PortfolioSection;
