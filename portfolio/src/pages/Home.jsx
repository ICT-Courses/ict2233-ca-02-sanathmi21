import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen relative z-10">
        <img
          src="/profile.jpg"
          alt="Sana"
          className="w-40 h-40 rounded-full mb-6 border-4 border-primary shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I’m Sanathmi (Sana)</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Aspiring Lawyer & IT Enthusiast | Building creative digital experiences
        </p>
        <div className="flex gap-4">
          <Link to="/projects" className="cosmic-button">View Projects</Link>
          <Link to="/contact" className="cosmic-button">Contact Me</Link>
        </div>
      </section>
    </div>
  );
};
