import { useState, useEffect, useRef } from "react";

interface Blog {
    id: number;
    img: string;
    date: string;
    comments: string;
    desc: string;
    codeLink: string;
    liveLink: string;
    tags: string[];
}


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

function BlogSection() {
    const blogs: Blog[] = [
        {
            id: 1,
            img: "/images/blog.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Completed English Language Course from Technical Training Center",
            codeLink: "https://github.com/devsheikhalamin/BlogProject",
            liveLink: "https://blog-project-rouge.vercel.app/",
            tags: ["React JS", "JavaScript", "HTML", "CSS", "Google API"],
        },
        {
            id: 2,
            img: "/images/library.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Fitness is a modern fitness and training platform that allows users",
            codeLink: "https://github.com/devsheikhalamin/Library",
            liveLink: "https://library-wzl6.vercel.app/",
            tags: ["React JS", "Tailwind CSS", "API", "JavaScript", "Express JS"],
        },
        {
            id: 3,
            img: "/images/madrasa.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "A full-stack parcel delivery management system where users ",
            codeLink: "https://github.com/devsheikhalamin/simple",
            liveLink: "https://simple-seven-phi.vercel.app/",
            tags: ["React JS", "Node JS", "Express", "Git", "MongoDB"],
        },
    ];

    return (
        <section
            id="Project"
            className="w-full overflow-x-hidden bg-white dark:bg-background py-16 sm:py-20 md:py-24"
        >
            {/* Section Header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <h4 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mb-4">
                    My Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base lg:text-xl leading-relaxed">
                    Here are some of my projects showcasing my skills and work.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-4 sm:px-6 lg:px-10">
                {blogs.map((blog, index) => {
                    const fade = useScrollFade();

                    return (
                        <div
                            key={blog.id}
                            ref={fade.ref}
                            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-500 overflow-hidden w-full max-w-xs sm:max-w-sm transform transition-all duration-700 ease-out
                            ${fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Image */}
                            <img
                                className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-2xl border-b border-fuchsia-500"
                                src={blog.img}
                                alt="blog"
                            />

                            {/* Card Content */}
                            <div className="p-5 text-center">
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    {blog.date} / {blog.comments}
                                </p>
                                <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 dark:text-gray-200">
                                    {blog.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {blog.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-fuchsia-200 text-xs sm:text-sm rounded-2xl dark:bg-purple-400 dark:text-white text-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-center gap-3 mt-5 flex-wrap">
                                    <a href={blog.codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className="px-4 py-2 rounded-md border border-purple-400 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 transition-all duration-500 shadow-lg hover:text-white">
                                            Code
                                        </button>
                                    </a>
                                    <a href={blog.liveLink} target="_blank" rel="noopener noreferrer">
                                        <button className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 hover:from-purple-900 hover:via-fuchsia-800 transition-all duration-500 shadow-lg">
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default BlogSection;
