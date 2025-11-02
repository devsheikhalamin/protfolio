import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const Footer04Page = () => {
  return (
    <div className="flex flex-col dark:bg-background">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>


              <h1 className="text-[28px] font-extrabold">
                <img className="h-15 rounded-full" src="/images/logo01.jpg" alt="logo" />
              </h1>

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      to={href}
                      className="hover:text-foreground text-purple-600 text-[14px]"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-medium text-[16px] text-purple-500">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <button className="px-4 py-2 rounded-md hover:text-white bg-gradient-to-r from-purple-500 via-purple-400
 hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400
 transition-all duration-500 shadow-lg text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-purple-500 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" target="_blank">
                Sheikhalamin
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link to="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link to="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link to="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <a href="#https://github.com/devsheikhalamin">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer04Page;
