import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";

export default function LocationPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Lokasi Kami</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kunjungi LalapLah! dan nikmati hidangan lalapan lezat dalam suasana
          yang nyaman.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="bg-gray-500 rounded-lg overflow-hidden h-89 w-full xl:mt-30">
            {/* Placeholder for map - in a real project, you would embed Google Maps here */}
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <div className="text-center p-0">
                <MapPin className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">
              Informasi Kontak & Lokasi
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Alamat</h3>
                  <p className="text-gray-600">Jl. Pahlawan No. 123</p>
                  <p className="text-gray-600">Denpasar, Bali</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Jam Buka</h3>
                  <p className="text-gray-600">
                    Senin - Minggu: 10:00 - 22:00 WITA
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Telepon / WhatsApp
                  </h3>
                  <p className="text-gray-600">0812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">lalaplah@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                  <p className="text-gray-600">@LalapLah!</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Petunjuk Arah</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Dari Terminal Purabaya: Naik angkot jurusan A, turun di Jalan
                  Pahlawan
                </li>
                <li>
                  Dari Stasiun Gubeng: Naik taksi atau ojek online, sekitar 15
                  menit perjalanan
                </li>
                <li>Tersedia parkir luas untuk mobil dan motor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
