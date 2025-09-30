import React, { useState, useEffect } from "react";

function BlogSection() {
    const blogs = [
        {
            id: 1,
            img: "/images/mitting-room.png",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Lorem ipsum dolor sit consea. Nulla purus",
        },
        {
            id: 2,
            img: "/images/a-1.jpg",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Lorem ipsum dolor sit consea. Nulla purus",
        },
        {
            id: 3,
            img: "/images/a-2.jpg",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Lorem ipsum dolor sit consea. Nulla purus",
        },
        {
            id: 4,
            img: "/images/a-3.jpg",
            date: "22 Oct, 2020",
            comments: "246 Comments",
            desc: "Lorem ipsum dolor sit consea. Nulla purus",
        },
    ];

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="Office"
            className="bg-fuchsia-50  sm:px-6 md:px-10 lg:px-20 py-10 dark:bg-background"
        >
            <div className="text-center mt-10">
                <h4 className="text-[26px] sm:text-[32px] font-extrabold text-gray-800 drop-shadow-sm dark:text-white">
                    My Office
                </h4>
                <p className="text-[15px] sm:text-[17px] text-gray-600 mt-3 max-w-2xl mx-auto dark:text-white">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4">
                {blogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className={`bg-white dark:bg-gray-400 backdrop-blur-md rounded-xl shadow-lg transition-all duration-500 transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <img
                            className="w-full h-48 object-cover rounded-t-xl"
                            src={blog.img}
                            alt="blog"
                        />
                        <div className="p-5 text-center">
                            <p className="text-[12px] text-gray-400 dark:text-white">
                                {blog.date} / {blog.comments}
                            </p>
                            <p className="text-[15px] text-gray-700 font-medium mt-2 dark:text-white">
                                {blog.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogSection;
