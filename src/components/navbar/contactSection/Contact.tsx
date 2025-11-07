import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon } from "lucide-react";
import { Link } from "react-router";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const ContactPage = () => {
    const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const leftControls = useAnimation();
    const rightControls = useAnimation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        terms: false,
    });

    useEffect(() => {
        if (leftInView) leftControls.start("visible");
        if (rightInView) rightControls.start("visible");
    }, [leftInView, rightInView, leftControls, rightControls]);

    const variants = (x: number) => ({
        hidden: { opacity: 0, x },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = formData;

        if (!firstName || !lastName || !message) {
            toast.error("Please fill out all required fields!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        toast.success("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "", terms: false });
    };

    return (
        <section
            id="contact"
            className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
        >

            <Toaster position="top-center" richColors />

            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-600 to-orange-300 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto dark:text-gray-300">
                        Have questions, feedback, or want to collaborate? Drop a message and I’ll get back to you shortly.
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                    {/* Left Section */}
                    <motion.div
                        ref={leftRef}
                        initial="hidden"
                        animate={leftControls}
                        variants={variants(-50)}
                        className="flex flex-col gap-6 w-full lg:w-1/3"
                    >
                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-800/70 backdrop-blur-sm transition-shadow">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 text-white">
                                <MailIcon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                                <a
                                    href="mailto:dev.alamin100@gmail.com"
                                    className="text-purple-600 hover:underline text-sm"
                                >
                                    dev.alamin100@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col p-4 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-sm">
                            <span className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                Connect with me
                            </span>
                            <div className="flex gap-4">
                                {[
                                    { icon: <LuGithub />, link: "https://github.com/devsheikhalamin" },
                                    { icon: <SlSocialLinkedin />, link: "https://linkedin.com" },
                                    { icon: <MailIcon className="w-5 h-5" />, link: "mailto:dev.alamin100@gmail.com" },
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-fuchsia-400 flex items-center justify-center text-white hover:scale-105 transition-transform"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="p-4 bg-white/60 dark:bg-gray-800/70 backdrop-blur-sm">
                            <p className="text-gray-700 dark:text-gray-300">
                                <span className="font-semibold text-purple-600">Open to opportunities!</span>
                                <br />
                                Available for freelance and full-time roles. Let’s build something amazing together!
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        ref={rightRef}
                        initial="hidden"
                        animate={rightControls}
                        variants={variants(50)}
                        className="flex-1"
                    >
                        <Card className="bg-white/70 dark:bg-gray-900/70 shadow-xl rounded-2xl backdrop-blur-sm border border-purple-500">
                            <CardContent className="p-6 sm:p-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="First name"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="mt-2 bg-gray-100 h-12 focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Last name"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="mt-2 bg-gray-100 h-12 focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="mt-2 bg-gray-100 h-12 focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Write your message..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="mt-2 bg-gray-100 focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.terms}
                                            onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                                            className="bg-fuchsia-200 dark:bg-gray-600"
                                        />
                                        <Label htmlFor="terms" className="text-gray-600 dark:text-gray-400 text-sm">
                                            You agree to our
                                            <Link to="#" className="underline ml-1 text-fuchsia-600 hover:text-purple-700">
                                                terms and conditions
                                            </Link>.
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-500 via-purple-400 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400 transition-all duration-500 shadow-lg text-white flex items-center justify-center gap-2"
                                    >
                                        Submit <IoIosSend className="text-xl" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
