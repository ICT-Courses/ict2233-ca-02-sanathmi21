import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name cannot be numbers
    if (!form.name || /\d/.test(form.name)) {
      setError("Please enter a valid name (letters only)!");
      return;
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!form.message) {
      setError("Message cannot be empty!");
      return;
    }

    setError("");
    alert("Form submitted! (You can connect with Sanathmi.)");

    // Reset form fields
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center text-center px-4 relative">
        <h2 className="text-3xl font-bold mb-6 text-glow">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-4"
        >
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
          <button type="submit" className="cosmic-button">
            Send
          </button>
        </form>

        <div className="flex gap-6 mt-6 justify-center">
          <a
            href="https://www.linkedin.com/in/sanathmi-sanupama"
            target="_blank"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
          <a href="https://github.com/sanathmi21" target="_blank">
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
          <a href="mailto:sana.sanupama2003@gmail.com">
            <img
              src="/images/email.png"
              alt="Email"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
