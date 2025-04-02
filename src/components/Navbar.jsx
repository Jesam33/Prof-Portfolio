"use client"; // Ensure this is a client component
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLight from "@/assets/Images/Becode.png"; // Light mode logo
import LogoDark from "@/assets/Images/beecode-dark.png"; // Dark mode logo
import Theme from "./Theme";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          {/* Ensure theme detection only runs after mounting */}
          {mounted && (
            <Image
              src={theme === "dark" ? LogoLight : LogoDark}
              width={150}
              height={150}
              alt="logo"
              priority
            />
          )}
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {data.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  className={`font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base ${
                    pathname === link.href ? "font-bold dark:text-primary-color text-primary-color" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}