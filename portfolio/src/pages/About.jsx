// About.jsx
export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 container">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-8 text-glow text-center">
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
            I’m <strong>Sanathmi Sanupama De Alwis</strong>, a university student passionate about 
            <strong> psychology, criminology, ICT, and law</strong>. 
            I enjoy creating digital experiences with React, C#, and MySQL.
          </p>
          <p className="mb-4 text-muted-foreground">
            I love combining technology and creativity to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Education + Skills */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>BSc IT (Ongoing) – University of Sri Jayewardenepura</li>
            <li>Faculty of Humanities & Social Sciences – Psychology, Criminology, ICT, Sociology</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <div>
              <h4 className="font-medium mb-2 text-glow">Technical Skills</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>React.js, C#, .NET, MySQL</li>
                <li>UI/UX Design with Figma</li>
                <li>GitHub & Deployment</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="font-medium mb-2 text-glow">Soft Skills</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Leadership (Youth Club Secretary, Prefect)</li>
                <li>Team Collaboration</li>
                <li>Time & Task Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
