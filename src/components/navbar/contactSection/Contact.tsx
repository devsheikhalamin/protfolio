import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Link } from "react-router";

const ContactPage = () => (
    <div id="contact">
        <section className="min-h-screen flex items-center justify-center py-16 ">
            <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-fuchsia-700 to-orange-300 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto dark:text-white">
                        Have questions, feedback, or want to collaborate? Send us a message and we will get back to you shortly.
                    </p>
                </div>

                {/* Form Card */}
                <Card className="bg-fuchsia-50 shadow-lg rounded-xl">
                    <CardContent className="p-6 md:p-8">
                        <form>
                            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="dark:text-gray-700" htmlFor="firstName">First Name</Label>
                                    <Input
                                        placeholder="First name"
                                        id="firstName"
                                        className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="dark:text-gray-700" htmlFor="lastName">Last Name</Label>
                                    <Input
                                        placeholder="Last name"
                                        id="lastName"
                                        className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Label className="dark:text-gray-700" htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Label className="dark:text-gray-700" htmlFor="message">Message</Label>
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

                            <Button className="mt-8 w-full bg-gradient-to-r from-purple-500 via-purple-400 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400 transition-all duration-500 shadow-lg text-white" size="lg">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    </div>
);

export default ContactPage;
