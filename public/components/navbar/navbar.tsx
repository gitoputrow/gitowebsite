"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/#greeting", label: "Greeting" },
    { href: "/#my-craft", label: "My Craft" },
    { href: "/#contact", label: "Contact Me" },
  ];

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-[100] w-full border-b border-[rgba(255,248,212,0.1)] bg-[rgba(20,20,20,0.72)] text-[var(--color-secondary)] shadow-[0_14px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        style={{ paddingInline: "clamp(32px, 6vw, 120px)" }}
      >
        <div className="flex h-[72px] w-full items-center justify-between max-[680px]:h-16">
          <div className="flex min-w-0 items-center gap-4">
            <div className="h-8 w-8 shrink-0 rounded-full border border-[var(--color-secondary)] bg-[linear-gradient(90deg,var(--color-secondary)_50%,var(--color-primary)_50%)] max-[680px]:h-7 max-[680px]:w-7"></div>
            <div className="truncate text-base font-bold tracking-wide text-[var(--color-secondary)] max-[680px]:text-sm">
              Personal Site
            </div>
          </div>

          <button className="hidden h-9 w-9 place-items-center rounded-md bg-[rgba(255,248,212,0.08)] text-xl text-[var(--color-secondary)] max-[680px]:grid" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          <ul className="flex items-center gap-10 max-[860px]:gap-7 max-[680px]:hidden">
            {links.map((link) => (
              <li
                key={link.href}
                className="list-none whitespace-nowrap text-sm font-semibold text-[rgba(255,248,212,0.72)] transition-colors duration-300 hover:text-[var(--color-secondary)]"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-20 bg-black/40 opacity-0 backdrop-blur transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      {isOpen && (
        <div className={`fixed z-30 h-screen w-3/5 translate-x-0 items-center bg-[var(--color-primary)] transition-transform duration-700 ease-in-out`}>
          <div className="flex items-center justify-center gap-2 py-6">
            <div className="h-[1.8rem] w-[1.8rem] rounded-full border-[1.5px] border-[var(--color-secondary)] bg-[conic-gradient(var(--color-primary)_0deg,var(--color-primary)_180deg,var(--color-secondary)_180deg,var(--color-secondary)_360deg)]"></div>
            <div className="text-base font-semibold text-[var(--color-secondary)]">Personal Site</div>
          </div>
          <div className="mb-[1.7rem] h-px w-full bg-[var(--color-secondary)]" />
          <ul className="flex flex-col gap-8 px-4">
            {links.map((link) => (
              <li
                key={link.href}
                className="flex list-none items-center justify-center rounded-[0.6rem] p-[0.8rem] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:font-semibold hover:text-[var(--color-primary)]"
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
