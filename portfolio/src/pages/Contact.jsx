import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    alert("Form submitted! (You can connect EmailJS here)");
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 container">
      <h2 className="text-3xl font-bold mb-6 text-glow">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-md border border-border"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-md border border-border"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-md border border-border"
          value={form.message}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="cosmic-button">Send</button>
      </form>
      <div className="flex gap-6 mt-6 justify-center">
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="mailto:youremail@gmail.com">Email</a>
      </div>
    </div>
  );
};
