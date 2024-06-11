const Navbar = () => {
  return (
    <nav className="navbar w-1/6 h-screen bg-[#FFA901] flex items-center justify-center flex-col text-black fixed">
      <h1 className="text-3xl font-bold">Daftar Menu</h1>
      <li className="list-none">
        <a className="text-xl font-bold">makanan</a>
      </li>
      <li className="list-none">
        <a className="text-xl font-bold">minuman</a>
      </li>
    </nav>
  );
};
export default Navbar;
