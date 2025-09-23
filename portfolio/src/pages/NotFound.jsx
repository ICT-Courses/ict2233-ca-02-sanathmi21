import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6">Oops! Page not found.</p>
      <Link to="/" className="cosmic-button">Go Home</Link>
    </div>
  );
};
