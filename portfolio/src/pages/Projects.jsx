import { useEffect, useState } from "react";

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("https://api.github.com/users/sanathmi21/repos");
      const data = await res.json();
      setRepos(data.slice(0, 6)); // show 6 repos
    };
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 container">
      <h2 className="text-3xl font-bold mb-6 text-glow">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 gradient-border card-hover">
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="mb-4 text-sm">{repo.description || "No description"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="cosmic-button">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
