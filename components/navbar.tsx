"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    return path !== "/" && pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-50 shadow-md">
      {/* Menghapus container dan padding untuk membuat konten mepet ke pojok */}
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Sekarang benar-benar mepet kiri dengan padding */}
          <Link href="/" className="flex items-center pl-4 md:pl-8">
            <span className="text-2xl font-bold text-orange-500">
              LalapLah!
            </span>
          </Link>

          {/* Desktop Navigation - Sekarang benar-benar mepet kanan dengan padding */}
          <nav className="hidden md:flex items-center pr-4 md:pr-8">
            <Link
              href="/"
              className={`font-medium transition-colors px-3 ${
                isActive("/")
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/menu"
              className={`font-medium transition-colors px-3 ${
                isActive("/menu")
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/tentang"
              className={`font-medium transition-colors px-3 ${
                isActive("/tentang")
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              href="/lokasi"
              className={`font-medium transition-colors px-3 ${
                isActive("/lokasi")
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Lokasi
            </Link>
            <Link
              href="/pesan"
              className={`font-medium px-4 py-2 rounded-md ml-2 ${
                isActive("/pesan")
                  ? "bg-green-700 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Pesan Online
            </Link>
            <Link
              href="/kontak"
              className={`font-medium px-4 py-2 rounded-md ml-2 ${
                isActive("/kontak")
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile Menu Button - Tetap di pojok kanan */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`font-medium py-2 ${
                  isActive("/")
                    ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/menu"
                className={`font-medium py-2 ${
                  isActive("/menu")
                    ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/tentang"
                className={`font-medium py-2 ${
                  isActive("/tentang")
                    ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/lokasi"
                className={`font-medium py-2 ${
                  isActive("/lokasi")
                    ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Lokasi
              </Link>
              <Link
                href="/pesan"
                className={`font-medium px-4 py-2 rounded-md text-center ${
                  isActive("/pesan")
                    ? "bg-green-700 text-white"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pesan Online
              </Link>
              <Link
                href="/kontak"
                className={`font-medium px-4 py-2 rounded-md text-center ${
                  isActive("/kontak")
                    ? "bg-orange-600 text-white"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
