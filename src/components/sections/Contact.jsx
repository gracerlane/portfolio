import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
		title: "",
    email: "",
    message: "",
  });

	

  const handleSubmit = (e) => {
		console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
		console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
		console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

    e.preventDefault();

    emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			e.target,
			import.meta.env.VITE_PUBLIC_KEY
		)
      .then((result) => {
        alert("Thank you for your message! I will get back to you as soon as possible.");
        setFormData({ name: "", email: "", title: "", message: "" });
      })
      .catch((error) => {
				console.error("EmailJS Error:", error);
				alert("Oops! Something went wrong. Please try again.");
			});
  };
	
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="mx-auto w-45 text-3xl font-bold mb-8 bg-black bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-gray/5 border border-gray/10 rounded px-4 py-3 text-gray transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="Your Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-gray/5 border border-gray/10 rounded px-4 py-3 text-gray transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="yourexample@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

						<div className="relative">
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                className="w-full bg-gray/5 border border-gray/10 rounded px-4 py-3 text-gray transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="Subject Line..."
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
								type="text"
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-gray/5 border border-gray/10 rounded px-4 py-3 text-gray transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-gray-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
