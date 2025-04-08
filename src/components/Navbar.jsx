import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-black px-8 py-6 shadow-sm flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">⚡ Carros Elétricos</h1>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/sobre" className="hover:underline">Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
