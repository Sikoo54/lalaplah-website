"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  const menuCategories = [
    {
      id: "ayam",
      name: "Ayam",
      items: [
        {
          name: "Ayam Goreng Lalapan",
          price: "Rp 25.000",
          description: "Ayam goreng renyah dengan sambal dan lalapan segar",
          image: "/ayam-goreng.jpg?height=300&width=400",
        },
        {
          name: "Ayam Bakar Lalapan",
          price: "Rp 27.000",
          description: "Ayam bakar bumbu manis dengan sambal dan lalapan segar",
          image: "/ayam-bakar.jpg?height=300&width=400",
        },
        {
          name: "Ayam Penyet Lalapan",
          price: "Rp 26.000",
          description: "Ayam penyet dengan sambal terasi dan lalapan segar",
          image: "/ayam-penyet.jpg?height=300&width=400",
        },
      ],
    },
    {
      id: "ikan",
      name: "Ikan",
      items: [
        {
          name: "Lele Goreng Lalapan",
          price: "Rp 20.000",
          description: "Lele goreng renyah dengan sambal dan lalapan segar",
          image: "/lele-goreng.jpg?height=300&width=400",
        },
        {
          name: "Gurame Goreng Lalapan",
          price: "Rp 45.000",
          description: "Gurame goreng utuh dengan sambal dan lalapan segar",
          image: "/gurame-goreng.jpg?height=300&width=400",
        },
        {
          name: "Mujair Bakar Lalapan",
          price: "Rp 35.000",
          description: "Nila bakar bumbu kecap dengan sambal dan lalapan segar",
          image: "/mujair-bakar.jpg?height=300&width=400",
        },
      ],
    },
    {
      id: "bebek",
      name: "Bebek",
      items: [
        {
          name: "Bebek Goreng Lalapan",
          price: "Rp 30.000",
          description: "Bebek goreng renyah dengan sambal dan lalapan segar",
          image: "/bebek-goreng.jpg?height=300&width=400",
        },
        {
          name: "Bebek Bakar Lalapan",
          price: "Rp 32.000",
          description:
            "Bebek bakar bumbu kecap dengan sambal dan lalapan segar",
          image: "/bebek-bakar.jpg?height=300&width=400",
        },
      ],
    },
    {
      id: "minuman",
      name: "Minuman",
      items: [
        {
          name: "Es Teh Manis",
          price: "Rp 5.000",
          description: "Teh manis dingin segar",
          image: "/es-teh.jpg?height=300&width=400",
        },
        {
          name: "Es Jeruk",
          price: "Rp 7.000",
          description: "Jeruk peras segar dengan es",
          image: "/es-jeruk.jpg?height=300&width=400",
        },
        {
          name: "Es Kelapa Muda",
          price: "Rp 10.000",
          description: "Kelapa muda segar dengan es dan sirup",
          image: "/es-kelapa.jpg?height=300&width=400",
        },
        {
          name: "Jus Alpukat",
          price: "Rp 12.000",
          description: "Jus alpukat segar dengan susu",
          image: "/jus-alpukat.jpg?height=300&width=400",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("ayam");

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Menu Kami</h1>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nikmati berbagai pilihan lalapan lezat dengan sambal pedas khas dan
          lalapan segar dari kebun kami sendiri.
        </p>

        <div className="w-full">
          <div className="flex justify-center mb-8 flex-wrap">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 font-medium rounded-md mx-1 my-1 ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {menuCategories.map((category) => (
            <div
              key={category.id}
              className={activeCategory === category.id ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-orange-500 font-bold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <Link href="/pesan" className="btn-green">
          Pesan Online Sekarang
        </Link>
      </div>
    </main>
  );
}
