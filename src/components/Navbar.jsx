import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

function NavItem({ text, href, onClick, closeMenu, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={href || "#"}
        aria-label={text === "Products" ? "Browse our product categories" : `Navigate to ${text}`}
        className="relative block py-2 px-4 cursor-pointer text-neutral-800 font-semibold tracking-wide transition duration-300 hover:text-gradient-to-r from-[#e4ac43] to-gray-900 hover:scale-105 hover:drop-shadow-lg select-none"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
          if (closeMenu) closeMenu();
        }}
        onMouseEnter={() => setIsHovered(true)}
      >
        {text}
        <span
          className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-[#e4ac43] to-gray-900 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"
          aria-hidden="true"
        />
      </Link>

      {/* Lazy load dropdown */}
      {children && isHovered && (
        <div
          className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white z-50"
          role="menu"
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const defaultNav = useMemo(
    () => [
      {text : "Home", href:"/home"},
      { text: "About Us", href: "/about" },
      {
        text: "Raw Materials",
        dropdown: [
          { text: "Perfumes", href: "/perfumes" },
          { text: "Incenses", href: "/sendels" },
          { text: "Detergents", href: "/detergents" },
          { text: "Care", href: "/care" },
          { text: "More", href: "/others" },
        ],
      },
      { text: "Our Products", href: "/brproducts" },

      { text: "Contact Us", href: "/contact" },
      { text: "Services", href: "/services" },
    ],
    []
  );

  const [navItems, setNavItems] = useState(defaultNav);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/api/navItems")
      .then((res) => res.json())
      .then((data) => setNavItems(data))
      .catch(() => {}); // fallback to default
  }, []);

  return (
    <header
      className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-md border-b border-gray-200 shadow-md"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 select-none" aria-label="Homepage" itemProp="url">
          <img
            loading="lazy"
            src="assets/images/logog.jpg"
            alt="Harmony Logo"
            className="w-28 h-18 object-contain drop-shadow-md"
            itemProp="image"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-200 transition"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Menu icon */}
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`${menuOpen ? "block" : "hidden"} sm:flex flex-col sm:flex-row gap-8 justify-center flex-1`}
          aria-label="Main navigation"
        >
          {navItems.map((item, idx) => (
            <NavItem key={idx} text={item.text} href={item.href} closeMenu={() => setMenuOpen(false)}>
              {item.dropdown &&
                item.dropdown.map((d, i) => (
                  <Link
                    key={i}
                    to={d.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    itemProp="url"
                  >
                    <span itemProp="name">{d.text}</span>
                  </Link>
                ))}
            </NavItem>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
