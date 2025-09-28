function Notifications() {
    const clients = [
        { id: 1, img: "public/images/linkedin.png", name: "LinkedIn", bg: "bg-red-200" },
        { id: 2, img: "public/images/spotify.png", name: "Spotify", bg: "bg-green-200" },
        { id: 3, img: "public/images/amazon.png", name: "Amazon", bg: "bg-yellow-200" },
        { id: 4, img: "public/images/medium.png", name: "Medium", bg: "bg-blue-200" },
        { id: 5, img: "public/images/spotify.png", name: "Spotify", bg: "bg-pink-200" },
        { id: 6, img: "public/images/google.png", name: "Google", bg: "bg-purple-200" },
    ];

    return (
        <div className="bg-cyan-50 pb-12 pt-6 overflow-hidden">
            <div className="md:py-4 md:px-6 text-center">
                {/* Heading */}
                <h5 className="text-[26px] sm:text-[33px] font-extrabold text-gray-800">
                    Happy Clients
                </h5>
                <p className="text-[14px] sm:text-[16px] text-gray-600 mt-3 px-4 sm:px-0 max-w-2xl mx-auto">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.
                </p>

                {/* Sliding Clients Row */}
                <div className="relative w-full mt-10 overflow-hidden">
                    <div
                        className="flex gap-6"
                        style={{
                            animation: "slideRight 25s linear infinite",
                            width: "max-content",
                        }}
                    >
                        {/* Original Clients */}
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="rounded-xl shadow-md p-6 flex items-center justify-center min-w-[150px] bg-white/70 backdrop-blur-md"
                            >
                                <div className={`p-6 rounded-full ${client.bg}`}>
                                    <img
                                        src={client.img}
                                        alt={client.name}
                                        className="w-16 h-16 object-contain filter invert"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Duplicate Clients for Infinite Loop */}
                        {clients.map((client) => (
                            <div
                                key={`${client.id}-copy`}
                                className="rounded-xl shadow-md p-6 flex items-center justify-center min-w-[150px] bg-white/70 backdrop-blur-md"
                            >
                                <div className={`p-6 rounded-full ${client.bg}`}>
                                    <img
                                        src={client.img}
                                        alt={client.name}
                                        className="w-16 h-16 object-contain filter invert"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline CSS Animation */}
            <style>{`
                @keyframes slideRight {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}

export default Notifications;
