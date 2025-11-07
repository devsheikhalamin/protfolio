import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer04Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setStatus("success");
      setMessage("✅ Successfully subscribed!");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(" Invalid email! Please try again.");
    }

    // Clear message after few seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex flex-col dark:bg-background">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">

            {/* Left Section */}
            <div>
              <h1 className="text-[28px] font-extrabold">
                <img className="h-15 rounded-full" src="/images/logo01.jpg" alt="logo" />
              </h1>

              <div className="mt-6 text-purple-600 text-[14px] space-y-2">
                <p>A student and a part-time teacher at Ahmad's School</p>
              </div>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-medium text-[16px] text-purple-500">
                Stay up to date
              </h6>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row items-center gap-2"
              >
                <Input
                  className="bg-gray-100 w-full"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md hover:text-white bg-gradient-to-r from-purple-500 via-purple-400 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400 transition-all duration-500 shadow-lg text-white w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>

              {/* Success / Error Message */}
              {message && (
                <p
                  className={`mt-3 text-sm ${status === "success"
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>

          <Separator />

          {/* Bottom Section */}
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            <span className="text-purple-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" target="_blank" className="hover:underline">
                Sheikhalamin
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5">
              <Link to="#" target="_blank">
                <TwitterIcon className="h-5 w-5 text-fuchsia-500 hover:text-purple-700 transition-colors" />
              </Link>
              <Link to="#" target="_blank">
                <DribbbleIcon className="h-5 w-5 text-fuchsia-500 hover:text-purple-700 transition-colors" />
              </Link>
              <Link to="#" target="_blank">
                <TwitchIcon className="h-5 w-5 text-fuchsia-500 hover:text-purple-700 transition-colors" />
              </Link>
              <a
                href="https://github.com/devsheikhalamin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5 text-fuchsia-500 hover:text-purple-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer04Page;
