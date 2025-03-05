import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <Image
          src="/lalapan-test.jpg"
          alt="Lalapan Enak"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            LalapLah!
          </h1>
          <p className="text-xl md:text-2xl text-white   mb-8">
            Nikmati kelezatan lalapan tradisional dengan cita rasa autentik
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="btn-primary text-center">
              Lihat Menu
            </Link>
            <Link
              href="/lokasi"
              className="text-white border border-white hover:bg-white/10 font-medium py-2 px-4 rounded-md transition-colors text-center"
            >
              Kunjungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 px-4 bg-white mb-10 mt-10">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Menu Favorit Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ayam Goreng Lalapan",
                price: "Rp 25.000",
                image: "/ayam-goreng.jpg?height=300&width=400",
              },
              {
                name: "Bebek Goreng Lalapan",
                price: "Rp 30.000",
                image: "/bebek-goreng.jpg?height=300&width=400",
              },
              {
                name: "Lele Goreng Lalapan",
                price: "Rp 20.000",
                image: "/lele-goreng.jpg?height=300&width=400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-48 lg:h-72">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-orange-500 font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="btn-primary inline-flex items-center justify-center"
            >
              Menu Lengkap <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pesan"
              className="btn-green inline-flex items-center justify-center"
            >
              Pesan Online
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Tentang LalapLah!</h2>
              <p className="text-gray-700 mb-4">
                Sejak 2025, LalapLah! telah menyajikan hidangan lalapan
                tradisional dengan bumbu rahasia turun-temurun. Kami menggunakan
                bahan-bahan segar dan berkualitas untuk memberikan pengalaman
                kuliner terbaik bagi pelanggan kami.
              </p>
              <p className="text-gray-700 mb-6">
                Setiap hidangan lalapan kami disajikan dengan sambal pedas khas
                dan lalapan segar yang dipetik langsung dari kebun kami sendiri.
              </p>
              <Link href="/tentang" className="btn-primary inline-block">
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/resto.jpg?height=400&width=600"
                  alt="Tentang Lalapan Enak"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jam Buka</h3>
              <p className="text-gray-700">Setiap Hari</p>
              <p className="text-gray-700 font-medium">10:00 - 22:00 WITA</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
              <p className="text-gray-700">Jl. Pahlawan No. 123</p>
              <p className="text-gray-700">Kota Denpasar, Bali</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Phone className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kontak</h3>
              <p className="text-gray-700">0812-3456-7890</p>
              <p className="text-gray-700">lalaplah@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
