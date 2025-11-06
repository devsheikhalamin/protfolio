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

// Hook for scroll fade
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
        <div id="Project" className="px-5 sm:px-6 md:px-10 lg:px-20 py-12 dark:bg-background">
            <div className="text-center mb-10">
                <h4 className="text-5xl font-medium bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent mb-4">
                    My Project
                </h4>
                <p className="mb-4 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    Here are some of my projects showcasing my skills and work.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-32 gap-8 lg:gap-0 justify-items-center">
                {blogs.map((blog, index) => {
                    const fade = useScrollFade();

                    return (
                        <div
                            key={blog.id}
                            ref={fade.ref}
                            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-300 overflow-hidden w-full max-w-xs transform transition-all duration-700 ease-out
                                ${fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <img
                                className="w-full h-48 object-cover rounded-t-2xl border-b border-fuchsia-500"
                                src={blog.img}
                                alt="blog"
                            />
                            <div className="p-5 text-center">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {blog.date} / {blog.comments}
                                </p>
                                <p className="text-sm text-gray-700 font-medium mt-2 dark:text-gray-200">
                                    {blog.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {blog.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-fuchsia-200 text-xs rounded-2xl dark:bg-purple-400 dark:text-white text-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                                    <a href={blog.codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className="px-3.5 py-2 rounded-md border border-purple-400 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 transition-all duration-500 shadow-lg hover:text-white">
                                            Code
                                        </button>
                                    </a>
                                    <a href={blog.liveLink} target="_blank" rel="noopener noreferrer">
                                        <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 hover:from-purple-900 hover:via-fuchsia-800 transition-all duration-500 shadow-lg">
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BlogSection;
