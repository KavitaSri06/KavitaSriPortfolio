import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary px-5 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link className="font-bold text-xl text-black" to="/#home">
          Kavita Sri G
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white text-sm font-medium">
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#experience">Experience</Link></li>
            <li><Link to="/skills">Skills & Credentials</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={toggleMenu}
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden text-black"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {toggleMenu && (
        <>
          <div
            onClick={() => setToggleMenu(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
          ></div>

          <nav className="fixed top-16 left-0 w-full bg-gray-700 z-20 md:hidden rounded-b-md shadow-lg">
            <ul className="flex flex-col items-center gap-4 text-white py-4 text-base">
              <li><Link to="/#home" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/#about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="/#projects" onClick={() => setToggleMenu(false)}>Projects</Link></li>
              <li><Link to="/#experience" onClick={() => setToggleMenu(false)}>Experience</Link></li>
              <li><Link to="/skills" onClick={() => setToggleMenu(false)}>Skills & Credentials</Link></li>
              <li><Link to="/#contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
