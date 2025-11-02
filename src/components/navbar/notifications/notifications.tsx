function Notifications() {
    const clients = [
        {
            id: 1,
            img: "/images/linkedin.png",
            name: "LinkedIn",
            bg: "bg-red-200"
        },
        {
            id: 2,
            img: "/images/spotify.png",
            name: "Spotify",
            bg: "bg-green-200"
        },
        {
            id: 3,
            img: "/images/amazon.png",
            name: "Amazon",
            bg: "bg-yellow-200"
        },
        {
            id: 4,
            img: "/images/medium.png",
            name: "Medium",
            bg: "bg-blue-200"
        },
        {
            id: 5,
            img: "/images/spotify.png",
            name: "Spotify",
            bg: "bg-pink-200"
        },
        {
            id: 6,
            img: "/images/google.png",
            name: "Google",
            bg: "bg-purple-200"
        },
    ];

    return (
        <div id="Happy" className="bg-emerald-50 pb-12 pt-6 overflow-hidden dark:bg-background">
            <div className="md:py-4 md:px-6 text-center mt-5">
                {/* Heading */}
                <h5 className="text-2xl mb-4 sm:text-3xl md:text-5xl font-extrabold text-emerald-800 dark:text-white">
                    Happy Clients
                </h5>
                <p className="mb-6 text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed dark:text-white">
                    There are many variations of passages of Lorem Ipsum available,

                </p>

                {/* Static Clients Grid */}
                <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10 justify-items-center px-10">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="rounded-xl shadow-md p-6 flex items-center justify-center bg-white/70 backdrop-blur-md mt-2.5"
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
    );
}

export default Notifications;
