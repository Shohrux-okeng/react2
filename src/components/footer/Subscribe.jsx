const Subscribe = () => {
  return (
    <div className="bg-[url('/salom.png')] bg-cover bg-center min-h-[60vh] flex flex-col justify-center items-center text-white px-4">
      <h2 className="text-2xl md:text-3xl font-light mb-2">Stay in Touch</h2>
      <div className="w-24 h-[1px] bg-white mb-6"></div>
      <div className="flex flex-col sm:flex-row bg-white/90 rounded-md overflow-hidden shadow-md">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-3 text-sm text-gray-800 outline-none w-[280px] sm:w-[340px]"
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-sm px-6 py-3 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
