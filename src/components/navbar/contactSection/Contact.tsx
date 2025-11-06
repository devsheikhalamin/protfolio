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
import { useEffect } from "react";

const ContactPage = () => {
    const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const leftControls = useAnimation();

    const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const rightControls = useAnimation();

    useEffect(() => {
        if (leftInView) leftControls.start("visible");
        if (rightInView) rightControls.start("visible");
    }, [leftControls, leftInView, rightControls, rightInView]);

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div id="contact">
            <section className="min-h-screen flex items-center justify-center py-16">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-0">
                    {/* Headline */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-medium bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto dark:text-white">
                            Have questions, feedback, or want to collaborate? Send us a message
                            and we will get back to you shortly.
                        </p>
                    </div>

                    {/* Main Flex Container */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        {/* Left: Contact Info */}
                        <motion.div
                            ref={leftRef}
                            initial="hidden"
                            animate={leftControls}
                            variants={leftVariants}
                            className="flex flex-col gap-6 w-full max-w-md mx-auto"
                        >
                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 border border-purple-300 rounded-lg bg-purple-50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 text-white">
                                    <MailIcon className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-800 dark:text-white">Email</span>
                                    <a
                                        href="mailto:dev.alamin100@gmail.com"
                                        className="text-purple-500 hover:underline text-sm"
                                    >
                                        dev.alamin100@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Connect with me */}
                            <div className="flex flex-col p-4 border border-purple-300 rounded-lg bg-purple-50">
                                <span className="font-semibold text-gray-800 mb-2">Connect with me</span>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center text-white">
                                        <LuGithub />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center text-white">
                                        <SlSocialLinkedin />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center text-white">
                                        <MailIcon className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Open to opportunities */}
                            <div className="p-4 border border-purple-300 rounded-lg bg-purple-50">
                                <p>
                                    <span className="font-semibold text-purple-600">Open to opportunities!</span>
                                    <br />
                                    I'm currently available for freelance projects and full-time positions.
                                    Let's build something amazing together!
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            ref={rightRef}
                            initial="hidden"
                            animate={rightControls}
                            variants={rightVariants}
                            className="flex-1 w-full"
                        >
                            <Card className="bg-fuchsia-50 shadow-lg rounded-xl w-full">
                                <CardContent className="p-6 md:p-8">
                                    <form>
                                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                                            <div className="col-span-2 sm:col-span-1">
                                                <Label className="dark:text-gray-700" htmlFor="firstName">
                                                    First Name
                                                </Label>
                                                <Input
                                                    placeholder="First name"
                                                    id="firstName"
                                                    className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1">
                                                <Label className="dark:text-gray-700" htmlFor="lastName">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    placeholder="Last name"
                                                    id="lastName"
                                                    className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <Label className="dark:text-gray-700" htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    id="email"
                                                    className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <Label className="dark:text-gray-700" htmlFor="message">
                                                    Message
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Message"
                                                    className="mt-2 bg-gray-100 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                                    rows={6}
                                                />
                                            </div>
                                            <div className="col-span-2 flex items-center gap-2">
                                                <Checkbox id="acceptTerms" className="bg-fuchsia-200 dark:bg-gray-400" />
                                                <Label htmlFor="acceptTerms" className="gap-0 dark:text-gray-500">
                                                    You agree to our
                                                    <Link to="#" className="underline ml-1 text-fuchsia-500">
                                                        terms and conditions
                                                    </Link>
                                                    <span>.</span>
                                                </Label>
                                            </div>
                                        </div>

                                        <Button
                                            className="mt-8 w-full bg-gradient-to-r from-purple-500 via-purple-400 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400 transition-all duration-500 shadow-lg text-white"
                                            size="lg"
                                        >
                                            Submit<IoIosSend />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
