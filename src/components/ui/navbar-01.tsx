

import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Logo } from "./logo";
import { ModeToggle } from "../mode-toggle";

const NavbarPage = () => {
  return (
    <div className=" bg-muted top-0 right-0 left-0 fixed z-20">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="border-2 px-2.5 py-1 rounded-md  hidden sm:flex">
              <a href="https://github.com/devsheikhalamin" className="hidden sm:inline-flex">
                github
              </a>
            </div>
            <ModeToggle />

            {/* Mobile Menu */}
            <div className="md:hidden mr-5">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
