import Link from "next/link";
import React from "react";
import { GiBookmarklet } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { label: "Web", href: "/web", id: 1 },
    { label: "HTML", href: "/html", id: 2 },
    { label: "CSS", href: "/css", id: 3 },
    { label: "JavaScript", href: "/js", id: 4 },
    { label: "React Js", href: "/reactjs", id: 5 },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiBookmarklet />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
