import React from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");
  const [statusTimeout, setStatusTimeout] = React.useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: "Irene Riportella",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Error sending message. Please try again.");
      console.error("EmailJS Error:", error);
    }

    if (statusTimeout) {
      clearTimeout(statusTimeout);
    }

    const timeout = setTimeout(() => {
      setStatus("");
    }, 3000);

    setStatusTimeout(timeout);
  };

  React.useEffect(() => {
    return () => {
      if (statusTimeout) {
        clearTimeout(statusTimeout);
      }
    };
  }, [statusTimeout]);

  return (
    <section
      id="contact"
      className="py-20 px-5 bg-black text-white text-center"
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-400 mt-2">
        I&apos;d love to hear from you! Send me a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-left text-gray-300 text-sm font-semibold"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-left text-gray-300 text-sm font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-left text-gray-300 text-sm font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-300 transition"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </form>
    </section>
  );
}

export default ContactSection;
