import bgImage from '.././../assets/2.png';
const Header = () => {
  return (
    <div
    className="bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
      <header className="flex justify-between not-visited: items-center p-10 ">
        <h1 className="text-white text-2xl font-serif ml-[50px]">Escape.</h1>
        <nav className="space-x-8 text-sm uppercase tracking-wide mr-[70px] text-white">
          <a href="#" className="hover:text-orange-300">Home</a>
          <a href="#" className="hover:text-orange-300">Categories</a>
          <a href="#" className="hover:text-orange-300">About</a>
          <a href="#" className="hover:text-orange-300">Contact</a>
        </nav>
      </header>

      <div className="text-center mt-[100px]">
        <h2 className="text-5xl font-serif mb-4 text-white">Let's do it together.</h2>
        <p className="text-lg text-white/80 mb-6">
          We travel the world in search of stories. Come along for the ride.
        </p>
        <button className="bg-[#dd783f] hover:bg-orange-500 text-white py-2 px-6 rounded shadow-lg transition mt-[20px]">
          View Latest Posts
        </button>
      </div>
    </div>
  );
};

export default Header;
