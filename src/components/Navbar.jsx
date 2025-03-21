import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-lg border-b border-black/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-between items-center h-16 text-black">
          <a href="#home" className="max-w-12 font-mono text-xl font-bold text-black">
            <img src="\src\assets\logo.png" alt="Grace Lane" />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-gray-500 transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-500 transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="hover:text-gray-500 transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="hover:text-gray-500 transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};