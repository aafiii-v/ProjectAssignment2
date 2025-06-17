const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#be5f20db] via-[#6c330dd6] to-[#954b1a] text-[#311d0d] p-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 flex items-center space-x-4">
                <img src="Logo.png" alt="Logo" className="h-16 w-16" />
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Coffee Beans</h1>
                    <h2 className="text-sm sm:text-base text-black">Biji Kopi Pilihan Terbaik</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;




