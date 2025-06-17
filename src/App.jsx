import { useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const beansList = [
    {
      id: 1,
      nama: "Arabika Samosir",
      kategori: "Biji Kopi",
      gambar: "Arabica-samosir.png",
      deskripsi: "Cita rasa asam yang khas dan aroma kuat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      nama: "Arabika Gayo Specialty",
      kategori: "Biji Kopi",
      gambar: "Arabica-specialty.png",
      deskripsi: "Cita rasa asam yang khas dan aroma kuat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      nama: "Robusta Reguler",
      kategori: "Biji Kopi",
      gambar: "Robusta-reguler.png",
      deskripsi: "Rasa pahit yang lebih kuat dan kandungan kafein tinggi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      nama: "Liberika",
      kategori: "Biji Kopi",
      gambar: "Liberica-coffee.png",
      deskripsi: "Aroma unik dan rasa yang berbeda dari Arabika dan Robusta. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      nama: "Excelsa Coffee",
      kategori: "Biji Kopi",
      gambar: "Excelsa-coffee.png",
      deskripsi: "Rasa buah-buahan yang manis dan aroma yang khas. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  // Filter berdasarkan nama (tidak case-sensitive)
  const filteredBeans = beansList.filter(bean =>
    bean.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="pt-32 px-6 bg-[#7a3e1d] text-white text-center">
        <input
          type="text"
          placeholder="Cari biji kopi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#ac592f]"
        />
      </div>

      <Content beans={filteredBeans} />
      <Footer />
    </>
  );
}

export default App;
