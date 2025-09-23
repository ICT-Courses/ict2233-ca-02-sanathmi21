// About.jsx
export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 container">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-glow text-center">
        About Me
      </h2>

      {/* Profile + Intro */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <img
          src="/profile.jpg"
          alt="Sana"
          className="w-48 h-48 rounded-full border-4 border-primary shadow-lg"
        />
        <div className="flex-1">
          <p className="mb-4 text-lg leading-relaxed">
            Hello! I’m <strong>Sanathmi Sanupama De Alwis</strong>, a passionate university student 
            exploring the intersection of   
            <strong> Information Technology</strong>. 
            I enjoy building desktop applications using C# and MySQL, 
            web applications with JavaScript, React, CSS, and Firebase, 
            and designing intuitive UI/UX interfaces in Figma.
          </p>
          <p className="mb-4 text-muted-foreground">
            I thrive on creative problem-solving, 
            learning new technologies, and turning ideas into functional, 
            user-friendly projects.
          </p>
        </div>
      </div>

      {/* Horizontal Education Roadmap */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-primary text-center">Education</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-primary/30 z-0"></div>

          <TimelineItem year="2019" title="GCE O/L" description="Completed General Certificate of Education Ordinary Level" />
          <TimelineItem year="2022-2023" title="GCE A/L" description="Completed General Certificate of Education Advanced Level" />
          <TimelineItem year="2023 Jun-Dec" title="Cyber Security Certificate" description="Completed Certificate Course in Cyber Security" />
          <TimelineItem year="2024-Present" title="BSc IT" description="Currently pursuing BSc Information Technology" />
        </div>
      </div>

      {/* Skills */}
<div className="grid md:grid-cols-2 gap-12">
  {/* Technical Skills */}
  <div className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Skills</h3>
    <div className="flex flex-wrap gap-3">
      {["C#", "Python", "CSS", "JavaScript", ".NET", "HTML", "MySQL", "React", "Express.js", "Node.js"].map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-primary/20 text-white font-medium rounded-full text-sm hover:bg-primary/40 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Soft Skills */}
<div className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h3 className="text-2xl font-semibold mb-4 text-primary">Soft Skills</h3>
  <div className="flex flex-wrap gap-3">
    {["Leadership", "Team Collaboration", "Time & Task Management", "Problem Solving", "Communication", "Adaptability"].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 bg-primary/20 text-white font-medium rounded-full text-sm hover:bg-primary/40 transition-colors duration-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

</div>

    </div>
  );
};

// TimelineItem Component
const TimelineItem = ({ year, title, description }) => (
  <div className="flex flex-col items-center relative z-10">
    {/* Circle marker */}
    <div className="w-6 h-6 bg-primary rounded-full shadow-lg mb-2 z-10"></div>
    <p className="text-sm text-muted-foreground mb-1 text-center">{year}</p>
    <h4 className="text-xl font-semibold text-center">{title}</h4>
    <p className="text-center text-foreground max-w-xs">{description}</p>
  </div>
);
