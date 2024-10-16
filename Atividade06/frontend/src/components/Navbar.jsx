import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-950 p-4 flex items-center">
      <div className="flex items-center">
        <img src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/459629028_898289155102492_8226756645760825027_n.jpg?ccb=11-4&oh=01_Q5AaIAHGZ13NpXhunsbmfjXSANnrKpUzsYlRZpT6MmPuCa4A&oe=671D17FB&_nc_sid=5e03e0&_nc_cat=110" alt="Minha Foto" className="w-10 h-10 rounded-full mr-4" />
        <span className="text-gray-200 font-semibold">EslynMotoBoy</span>
      </div>
      <ul className="flex justify-around flex-grow">
        <li>
          <Link to="/" className="text-gray-200 hover:text-green-500 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/add-anime" className="text-gray-200 hover:text-green-500 transition duration-200">Adicionar Anime</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
