import { useState } from "react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Custom Furniture Price Estimator",
      description: "Desktop application for Viyona Interiors. Customers can estimate furniture costs with dimensions and materials, and also browse the designs that seller added.",
      image: "/images/furniture.png",
      html_url: "https://github.com/ICT-Courses/application-development-ca1-sanathmi21",
    },
    {
      id: 2,
      name: "Age Calculator",
      description: "A Desktop Age Calculator application where users can enter their birth date and a target date to instantly calculate and display their exact age in years, months, and days, providing a simple and accurate way to track age differences.", 
      image: "/images/age.png", 
      html_url: "https://github.com/sanathmi21/StudentProjects",
    },
    {
      id: 3,
      name: "Halls & Rooms Reservation System",
      description: "A web-based Halls & Rooms Reservation System that allows clients to check availability and make reservations online, while admins can efficiently manage bookings, content, and client inquiries.",
      image: "/images/reservation.png",
      html_url: "https://github.com/pehesara112455/softstack",
    },
    {
      id: 4,
      name: "Phone-Store Website",
      description: "A modern web-based Phone Store where users can browse and explore various smartphone products with a sleek, user-friendly interface.",
      image: "/images/phonestore.png",
      html_url: "https://github.com/ICT-Courses/ict2233-ca-01-sanathmi21",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section id="projects">

  <div className="min-h-screen bg-background text-foreground relative pt-20 z-10">
    <h2 className="text-3xl font-bold mb-10 text-center text-glow">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
      {projects.slice(0, visibleCount).map((project) => (
        <div
          key={project.id}
          className="p-6 rounded-lg bg-card shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p className="text-sm mb-4 text-muted-foreground">{project.description}</p>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button"
          >
            View Repo
          </a>
        </div>
      ))}
    </div>

    {visibleCount < projects.length && (
      <div className="text-center mt-8">
        <button onClick={handleSeeMore} className="cosmic-button px-6 py-2">
          See More Projects
        </button>
      </div>
    )}
  </div>
</section>

  );
};
