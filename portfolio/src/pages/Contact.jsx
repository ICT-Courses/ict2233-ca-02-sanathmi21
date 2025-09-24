import { useState } from "react";
import { StarBackground } from "../components/StarBackground";

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
        {/* StarBackground behind everything */}
        <div className="absolute inset-0 z-0">
          <StarBackground />
        </div>

        {/* Content layer above stars */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full">
          <h2 className="text-3xl font-bold mb-6 text-glow relative z-20">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col gap-4 relative z-20"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-md border border-border bg-card text-foreground relative z-30"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-border bg-card text-foreground relative z-30"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded-md border border-border bg-card text-foreground relative z-30 min-h-[120px] resize-vertical"
              value={form.message}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 relative z-30">{error}</p>}
            <button type="submit" className="cosmic-button relative z-30">
              Send
            </button>
          </form>

          <div className="flex gap-6 mt-6 justify-center relative z-20">
            <a
              href="https://www.linkedin.com/in/sanathmi-sanupama-210b34313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/linkedin.png`}
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a 
              href="https://github.com/sanathmi21" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/github.png`}
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a 
              href="mailto:sana.sanupama2003@gmail.com"
              className="relative z-30"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/email.png`}
                alt="Email"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
