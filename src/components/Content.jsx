const Content = ({ beans }) => {
  return (
    <div className="pt-32 px-4 pb-10 bg-[#7a3e1d] min-h-screen text-black">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="max-w-6xl mx-auto bg-[#c15826] rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row items-center gap-4
                     transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <img
            src={bean.gambar}
            alt={bean.nama}
            className="w-24 h-24 object-contain bg-[#61371bd6] rounded-md"
          />

          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-bold">{bean.nama}</h2>
            <p className="text-sm text-[#3b1c0e]">#Kategori: {bean.kategori}</p>
            <div>
              <h3 className="font-semibold mt-2 mb-1 text-sm">Deskripsi Produk</h3>
              <p className="text-sm text-black">{bean.deskripsi}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
