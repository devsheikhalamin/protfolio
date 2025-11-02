
import Footer04Page from "../footer-04/footer-04";
import AboutSection from "../navbar/AboutSection/AboutSection";
import BlogSection from "../navbar/blogSection/BlogSection";
import ContactPage from "../navbar/contactSection/Contact";
import HeroSection from "../navbar/HeroSection/HeroSection";
import WorkSection from "../navbar/workSection/workSection";
import NavbarPage from "../ui/navbar-01";


function HeaderPage() {
    return (
        <div>
            <NavbarPage />
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <BlogSection />
            <ContactPage />
            <Footer04Page />

        </div>
    );
}

export default HeaderPage;