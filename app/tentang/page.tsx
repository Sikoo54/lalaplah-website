import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Tentang Kami</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Mengenal lebih dekat bersama LalapLah! dan perjalanan kami dalam
          menyajikan hidangan lalapan terbaik.
        </p>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/tentang-kami.jpg?height=600&width=800"
                alt="Pendiri Lalapan Enak"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
              <p className="text-gray-700 mb-4">
                LalapLah didirikan pada tahun 2025 oleh Pak Sacha Ahsan
                Firmansyah, seorang pecinta kuliner tradisional yang memiliki
                impian untuk melestarikan cita rasa lalapan autentik Jawa Timur.
              </p>
              <p className="text-gray-700 mb-4">
                Berawal dari warung kecil di pinggir jalan dengan hanya 3 meja,
                kini LalapLah Pak Sacha telah berkembang menjadi restoran yang
                dicintai oleh masyarakat Denpasar dan sekitarnya.
              </p>
              <p className="text-gray-700 mb-4">
                Rahasia kelezatan hidangan kami terletak pada bumbu-bumbu
                pilihan dan resep turun-temurun yang telah diwariskan dari
                generasi ke generasi. Setiap hidangan disiapkan dengan penuh
                cinta dan perhatian terhadap detail.
              </p>
              <p className="text-gray-700">
                Kami berkomitmen untuk selalu menggunakan bahan-bahan segar dan
                berkualitas tinggi, serta menjaga kebersihan dan kenyamanan
                tempat kami demi kepuasan pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas</h3>
              <p className="text-gray-600">
                Kami hanya menggunakan bahan-bahan terbaik dan segar untuk
                setiap hidangan yang kami sajikan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Autentisitas</h3>
              <p className="text-gray-600">
                Kami menjaga keaslian resep tradisional untuk memberikan
                pengalaman kuliner yang otentik.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pelayanan</h3>
              <p className="text-gray-600">
                Kami berkomitmen untuk memberikan pelayanan terbaik dan
                menciptakan pengalaman yang menyenangkan bagi pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sacha Ahsan ",
                role: "Chief Executive Officer",
                image: "/profile.jpg?height=300&width=300",
              },
              {
                name: "Gordon Ramsay",
                role: "Head Chef",
                image: "/Gordon.png?height=300&width=300",
              },
              {
                name: "Elon Musk",
                role: "Operational Manager",
                image: "/elon.jpg?height=300&width=300",
              },
              {
                name: "Mr Beast",
                role: "Marketing Manager",
                image: "/mrbeast.png?height=300&width=300",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 text-center"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover scale-100"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="text-gray-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
