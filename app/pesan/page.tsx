"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function OrderPage() {
  // Ini akan menjadi URL ke halaman restoran Anda di Grab dan Gojek
  // Ganti dengan URL yang sebenarnya
  const [grabUrl] = useState(
    "https://food.grab.com/id/id/restaurant/lalapan-enak-pak-budi"
  );
  const [gojekUrl] = useState(
    "https://gofood.co.id/surabaya/restaurant/lalapan-enak-pak-budi"
  );
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">Pesan Online</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nikmati hidangan lalapan favorit Anda diantar langsung ke rumah
          melalui layanan pesan antar.
        </p>

        <div className="w-full">
          <div className="grid w-full grid-cols-2 mb-8">
            <button
              onClick={() => setActiveTab("delivery")}
              className={`py-2 font-medium ${
                activeTab === "delivery"
                  ? "bg-gray-300 text-gray-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Pesan Antar
            </button>
            <button
              onClick={() => setActiveTab("pickup")}
              className={`py-2 font-medium ${
                activeTab === "pickup"
                  ? "bg-gray-300 text-gray-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Ambil Sendiri
            </button>
          </div>

          <div className={activeTab === "delivery" ? "space-y-8" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GrabFood Card */}
              <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
                <div className="bg-[#f1f1f1] p-4 pb-8">
                  <Image
                    src="/grab.png?height=60&width=180"
                    alt="GrabFood"
                    width={180}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Pesan via GrabFood
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pesan melalui GrabFood dan nikmati promo spesial serta
                    pengiriman cepat.
                  </p>
                  <button
                    onClick={() => window.open(grabUrl, "_blank")}
                    className="w-full bg-[#00B14F] hover:bg-[#009e47] text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
                  >
                    Pesan di GrabFood <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* GoFood Card */}
              <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
                <div className="bg-[#f3f3f3] p-4">
                  <Image
                    src="/gojek.png?height=60&width=180"
                    alt="GoFood"
                    width={180}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Pesan via GoFood
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pesan melalui GoFood dan dapatkan voucher cashback serta
                    pengiriman tepat waktu.
                  </p>
                  <button
                    onClick={() => window.open(gojekUrl, "_blank")}
                    className="w-full bg-[#00b12c] hover:bg-[#009e15] text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
                  >
                    Pesan di GoFood <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Catatan Penting:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Waktu pengiriman tergantung pada jarak dan kepadatan lalu
                  lintas
                </li>
                <li>
                  Biaya pengiriman ditentukan oleh aplikasi Grab atau Gojek
                </li>
                <li>Pastikan alamat pengiriman Anda sudah benar</li>
                <li>
                  Untuk pesanan dalam jumlah besar, disarankan untuk memesan
                  minimal 2 jam sebelumnya
                </li>
              </ul>
            </div>
          </div>

          <div className={activeTab === "pickup" ? "space-y-8" : "hidden"}>
            <div className="rounded-lg shadow-md border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Pesan untuk Diambil Sendiri
                </h3>
                <p className="text-gray-600 mb-6">
                  Pesan terlebih dahulu dan ambil pesanan Anda tanpa perlu
                  menunggu. Pesanan Anda akan disiapkan dan siap untuk diambil
                  pada waktu yang Anda tentukan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Cara Memesan:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Hubungi kami di 0812-3456-7890</li>
                      <li>Sebutkan menu yang ingin dipesan</li>
                      <li>Tentukan waktu pengambilan</li>
                      <li>Datang dan ambil pesanan Anda</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Keuntungan:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Tidak ada biaya pengiriman</li>
                      <li>Pesanan lebih cepat siap</li>
                      <li>Makanan masih hangat saat diambil</li>
                      <li>Diskon 5% untuk setiap pesanan ambil sendiri</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:+6281234567890"
                    className="btn-primary text-center"
                  >
                    Telepon Sekarang
                  </Link>
                  <Link href="/menu" className="btn-secondary text-center">
                    Lihat Menu Terlebih Dahulu
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Jam Pengambilan:</h3>
              <p className="text-gray-700 mb-4">
                Anda dapat mengambil pesanan Anda selama jam operasional kami:
              </p>
              <p className="text-gray-700 font-medium">
                Setiap Hari: 10:00 - 22:00 WITA
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
