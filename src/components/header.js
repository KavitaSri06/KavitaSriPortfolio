import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary px-2 sm:px-5 py-4 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-0">
        
        {/* Logo */}
        <Link className="font-bold text-xl text-black" to="/#home">
          Kavita Sri G
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-6 text-white text-sm font-medium">
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
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden text-black z-50"
          aria-label="Toggle menu"
        >
          {toggleMenu ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out z-40 ${
          toggleMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-gray-800 text-white w-full rounded-b-lg shadow-lg`}
      >
        <ul className="flex flex-col items-center py-4 gap-4 text-base px-4">
          <li><Link to="/#home" onClick={() => setToggleMenu(false)}>Home</Link></li>
          <li><Link to="/#about" onClick={() => setToggleMenu(false)}>About</Link></li>
          <li><Link to="/#projects" onClick={() => setToggleMenu(false)}>Projects</Link></li>
          <li><Link to="/#experience" onClick={() => setToggleMenu(false)}>Experience</Link></li>
          <li><Link to="/skills" onClick={() => setToggleMenu(false)}>Skills & Credentials</Link></li>
          <li><Link to="/#contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
