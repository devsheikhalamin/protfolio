import { useState, useEffect } from "react";

function BlogSection() {
    const blogs = [
        {
            id: 1,
            img: "/images/protfolio.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Completed Web Development Course with Programming manage deliveries.",
            codeLink: "https://github.com/devsheikhalamin/protfolio",
            liveLink: "https://protfolio-rho-steel.vercel.app/",
            tags: ["Tailwind CSS", "HTML", "React JS", "JavaScript"],
        },
        {
            id: 2,
            img: "/images/blog.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Completed English Language Course from Technical Training Center",
            codeLink: "https://github.com/devsheikhalamin/BlogProject",
            liveLink: "https://blog-project-rouge.vercel.app/",
            tags: ["React JS", "JavaScript", "HTML", "CSS", "google API"],
        },
        {
            id: 3,
            img: "/images/library.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Fitness is a modern fitness and training platform that allows users",
            codeLink: "https://github.com/devsheikhalamin/Library",
            liveLink: "https://library-wzl6.vercel.app/",
            tags: ["React JS", "Tailwind CSS", "API", "JavaScript", "express Js"],
        },
        {
            id: 4,
            img: "/images/madrasa.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "A full-stack parcel delivery management system where users ",
            codeLink: "https://github.com/devsheikhalamin/simple",
            liveLink: "https://simple-seven-phi.vercel.app/",
            tags: ["React JS", "Node JS", "Express", "Git", "MongoDB"],
        },
    ];

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="Project" className="sm:px-6 md:px-10 lg:px-20 py-10 dark:bg-background">
            <div className="text-center">
                <h4 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mb-4">
                    My Project
                </h4>
                <p className="mb-4 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-5 sm:px-0">
                {blogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className={`bg-white dark:bg-white backdrop-blur-md rounded-xl border border-purple-400 shadow-lg transition-all duration-500 transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <img
                            className="w-full h-48 border-b border-fuchsia-500 object-cover rounded-t-xl"
                            src={blog.img}
                            alt="blog"
                        />
                        <div className="p-5 text-center">
                            <p className="text-[12px] text-gray-500 dark:text-gray-600">
                                {blog.date} / {blog.comments}
                            </p>
                            <p className="text-[15px] text-gray-700 font-medium mt-2 dark:text-gray-600">
                                {blog.desc}
                            </p>

                            {/* Demo tags above buttons */}
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {blog.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-fuchsia-200 text-purple-500 text-xs rounded-full dark:bg-purple-400 dark:text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons side by side */}
                            <div className="flex justify-center gap-3 mt-4">
                                <a href={blog.codeLink} target="_blank" rel="noopener noreferrer">
                                    <button className="px-3.5 py-2 dark:text-gray-600 rounded-md border border-purple-400 hover:bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400transition-all duration-500 shadow-lg dark:hover:text-white hover:text-white">
                                        Code
                                    </button>
                                </a>
                                <a href={blog.liveLink} target="_blank" rel="noopener noreferrer">
                                    <button className="px-4 py-2 rounded-md text-white hover:text-white bg-gradient-to-r from-purple-500 via-purple-400 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400 transition-all duration-500 shadow-lg">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogSection;


