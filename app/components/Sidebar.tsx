'use client';
import { useState } from 'react';
import Dashboard from './sidebarcomp/home';
import Formelement from './sidebarcomp/forms';
import Tables from './sidebarcomp/Tables';
import UIelement from './sidebarcomp/Uielement';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-2 ">
          <span className="block w-8 h-0.5 bg-gray-300"></span>
          <span className="block w-8 h-0.5 bg-gray-300"></span>
          <span className="block w-6 h-0.5 bg-gray-300"></span>
        </div>
      </button>

      {/* Sidebar */}
      <div className={`
        bg-blue-950 shadow-lg overflow-y-auto h-screen text-xs
        fixed md:relative transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        w-64 z-40
      `}>
        <div className="md:hidden absolute top-4 right-4">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        
        < Dashboard />
        <UIelement />
        <Formelement />
        <Tables/>
      </div>
    </>
  );
}