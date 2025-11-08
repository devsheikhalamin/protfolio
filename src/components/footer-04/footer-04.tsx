import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";

const Footer04Page = () => {
  return (
    <footer className="flex flex-col items-center justify-center dark:bg-background">
      <Separator />

      {/* Bottom Section */}
      <div className="py-8 flex flex-col items-center justify-center gap-3 px-6 text-center">
        {/* Copyright */}
        <span className="text-purple-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" target="_blank" className="hover:underline">
            Sheikhalamin
          </Link>
          . All rights reserved.
        </span>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5">
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
    </footer>
  );
};

export default Footer04Page;
