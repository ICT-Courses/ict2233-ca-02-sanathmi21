import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-xl font-bold text-glow">Sana’s Portfolio</h1>
        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-primary">Home</NavLink>
          <NavLink to="/about" className="hover:text-primary">About</NavLink>
          <NavLink to="/projects" className="hover:text-primary">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};
