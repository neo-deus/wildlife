"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsLoggedIn(!!email);
  }, []);

  return (
    <nav className="bg-purple-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Image src="/path/to/your/logo.png" alt="Innohub Logo" width={40} height={40} /> */}
            <span className="ml-2 text-2xl font-bold text-gradient bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Ecosonic
            </span>
          </div>
          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            {isLoggedIn ? (
              <>
                <Link href="/" className="text-white cursor-pointer">Dashboard</Link>
                <Link href="/map" className="text-white cursor-pointer">Map View</Link>
                <Link href="/alerts" className="text-white cursor-pointer">Alerts</Link>
                <Link href="/sensors" className="text-white cursor-pointer">Sensors</Link>
                <Link href="/audio" className="text-white cursor-pointer">Audio Classification</Link>
                <Link href="/logout" className="text-white cursor-pointer">Logout</Link>
              </>
            ) : (
              <>
              <Link href="/login" className="text-white cursor-pointer">Login</Link>
              <Link href="/signup" className="text-white cursor-pointer">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;