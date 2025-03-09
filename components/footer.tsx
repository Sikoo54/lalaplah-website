import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">LalapLah!</h3>
            <p className="text-gray-300 mb-4">
              Menyajikan hidangan lalapan tradisional dengan cita rasa autentik
              sejak 2025.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-300 hover:text-white"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/lokasi" className="text-gray-300 hover:text-white">
                  Lokasi
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Jl. Pahlawan No. 123</p>
              <p className="mb-2">Kota Denpasar, Bali</p>
              <p className="mb-2">0812-3456-7890</p>
              <p className="mb-2">lalaplah@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} <strong>LalapLah!</strong> by
            <span className="font-medium"> Sacha Ahsan Firmansyah</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
