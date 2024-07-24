// components/Navigation.js
"use client"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/map">Map View</Link>
      <Link href="/alerts">Alerts</Link>
      <Link href="/sensors">Sensors</Link>
      <Link href="/audio">Audio Classification</Link>
      {/* Add more navigation items as needed */}
    </nav>
  );
};

export default Navbar;
