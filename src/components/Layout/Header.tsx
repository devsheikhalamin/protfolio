
import Footer04Page from "../footer-04/footer-04";
import AboutSection from "../navbar/AboutSection/AboutSection";
import BlogSection from "../navbar/blogSection/BlogSection";
import HeroSection from "../navbar/HeroSection/HeroSection";
import Notifications from "../navbar/notifications/notifications";
import PortfolioSection from "../navbar/protfolio/protfolioSection";
import Together from "../navbar/together/together";
import WorkSection from "../navbar/workSection/workSection";
import NavbarPage from "../ui/navbar-01";


function HeaderPage() {
    return (
        <div>
            <NavbarPage />
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <PortfolioSection />
            <Together />
            <BlogSection />
            <Notifications />
            <Footer04Page />

        </div>
    );
}

export default HeaderPage;