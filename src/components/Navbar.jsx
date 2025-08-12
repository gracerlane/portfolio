import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home"); // Default to "home"

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home"; // Default to "home"

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Call handleScroll initially to set active section on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-lg border-b border-black/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-between items-center h-16 text-black">
          <a href="#home" className="max-w-12 font-mono text-xl font-bold text-black">
            <img src={logo} alt="G" />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-gray-400 transition-colors ${
                  activeSection === section ? "text-gray-400" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
