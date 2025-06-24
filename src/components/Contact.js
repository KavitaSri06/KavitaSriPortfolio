import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-hero-font border-b-2 w-fit mx-auto mb-6">
          Contact Me
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          Let's connect and build something awesome together.
        </p>

        <div className="flex justify-center gap-10 text-white text-3xl mb-12">
          <a
            href="mailto:kavitasri.27it@licet.ac.in"
            className="hover:text-accent transition"
            aria-label="Email"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/g-kavita-sri-394031283/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/KavitaSri06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="GitHub"
          >
            <AiOutlineGithub />
          </a>
        </div>

        {/* Optional Form (you can remove this block if not needed) */}
        <form
          action="https://formspree.io/f/mpwryypr" // replace with your Formspree ID
          method="POST"
          className="space-y-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />
          <button
            type="submit"
            className="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
