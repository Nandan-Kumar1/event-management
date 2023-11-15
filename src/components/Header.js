function Header() {
  return (
    <header className="flex px-5 items-center bg-white m-3 rounded-md shadow-lg border-2 border-gray-100 ">
      <img
        className="h-16 rounded-full my-2"
        src="./favicon.png"
        alt="logo nitj"
      />
      <p className="pl-8 text-4xl font-semibold text-[#14a4d4] ">
        Event Gallery
      </p>
    </header>
  );
}

export default Header;
