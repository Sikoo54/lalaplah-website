"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda. Kirimkan pesan, pertanyaan, atau saran Anda melalui formulir di bawah ini.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">Terima Kasih!</h3>
                  <p>Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.</p>
                </div>
                <button onClick={() => setIsSubmitted(false)} className="btn-primary">
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 min-h-[150px]"
                  />
                </div>

                <button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-orange-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Alamat</h3>
                    <p className="text-gray-600">Jl. Pahlawan No. 123</p>
                    <p className="text-gray-600">Kota Surabaya, Jawa Timur</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-600">0812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">lalapanenak@email.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Jam Buka</h3>
                    <p className="text-gray-600">Senin - Minggu: 10:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Reservasi</h2>
              <p className="text-gray-600 mb-4">
                Untuk reservasi meja atau acara khusus, silakan hubungi kami melalui telepon atau email.
              </p>
              <p className="text-gray-600 mb-4">
                Kami menyediakan paket khusus untuk acara ulang tahun, pertemuan keluarga, atau acara bisnis.
              </p>
              <Link href="tel:+6281234567890" className="btn-primary inline-block">
                Hubungi untuk Reservasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

