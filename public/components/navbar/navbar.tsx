"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./navbar_styles.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="navbar">
        <div className="logowidget">
          <div className="logo"></div>
          <div className="logotext">Personal Site</div>
        </div>

        <button className="menubutton" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className="navlinks">
          <li className={pathname === "/greeting" ? "active" : ""}>
            <Link href="/greeting">Greeting</Link>
          </li>
          <li className={pathname === "/my-craft" ? "active" : ""}>
            <Link href="/my-craft">My Craft</Link>
          </li>
          <li className={pathname === "/contact-me" ? "active" : ""}>
            <Link href="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <div
        className={`backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
      {isOpen && (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-logo">
            <div className="logo"></div>
            <div className="logotext">Personal Site</div>
          </div>
          <ul>
            <li className={pathname === "/" ? "active" : ""}>
              <Link href="/greeting" onClick={() => setIsOpen(false)}>Greeting</Link>
            </li>
            <li className={pathname === "/my-craft" ? "active" : ""}>
              <Link href="/my-craft" onClick={() => setIsOpen(false)}>My Craft</Link>
            </li>
            <li className={pathname === "/contact-me" ? "active" : ""}>
              <Link href="/contact-me" onClick={() => setIsOpen(false)}>Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
