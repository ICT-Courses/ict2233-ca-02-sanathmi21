import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/NavBar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section id="home">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <ThemeToggle />
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen relative z-20">
          <img
            src="/profile.jpg"
            alt="Sanathmi"
            className="w-65 h-65 rounded-full mb-6 border-4 border-primary shadow-lg animate-fade-in relative z-30"
          />
          <h1 className="text-4xl font-bold mb-2 animate-fade-in-delayed-1 relative z-30 text-glow">
            Hi, I'm Sanathmi
          </h1>
          <p className="text-lg text-muted-foreground mb-6 animate-fade-in-delayed-2 relative z-30">
            <span className="inline-block animate-fade-in-delayed-2">Aspiring IT Enthusiast | Building creative digital experiences</span>
          </p>
          <div className="flex gap-4 animate-fade-in-delayed-4 relative z-30">
            <a href="/#projects" className="cosmic-button hover:animate-pulse">View Projects</a>
            <a href="/#contact" className="cosmic-button hover:animate-pulse">Contact Me</a>
          </div>
        </section>
      </div>
    </section>
  );
};