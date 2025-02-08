import React from "react";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // Skip if clicking the menu button itself
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Only add the listener if the menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={scrollToTop}
              >
                <img
                  className="h-8 w-8 cursor-pointer"
                  src="/images/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector(link.href);
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              ref={buttonRef}
              onClick={handleMenuClick}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">
                {menuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <div className="w-6 h-6 flex items-center justify-center">
                {menuOpen ? (
                  <span className="text-2xl leading-none">&times;</span>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black absolute top-16 left-0 w-full"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
