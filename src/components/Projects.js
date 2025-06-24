import { useState, useEffect } from "react";
import EmartImg from "../assets/Emart.png";
import UiDesign1 from "../assets/Ecommerce.png";
import UiDesign2 from "../assets/connect4.png";
import UiDesign3 from "../assets/tic-tac-toe.png";
import PortfolioIMg from "../assets/Protfolio.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✨ Animation Hook
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [inView, controls]);

  return [ref, controls];
};

export default function Projects() {
  const uiuxProjects = [
    {
      image: UiDesign1,
      title: "E-commerce Website UI",
      description: "A concept UI for an e-commerce app, created using Figma...",
      designLink: "https://www.figma.com/design/PBk2cf4gjFnR7QHOCQUXkY/Fashion-Store---Ecommerce-Website",
      prototypeLink: "https://www.figma.com/proto/PBk2cf4gjFnR7QHOCQUXkY/Fashion-Store---Ecommerce-Website?page-id=0%3A1",
      hoverMessage: "Clean and minimal layout for an online fashion store.",
    },
    {
      image: UiDesign2,
      title: "Connect4 - Game UI",
      description: "A UI design prototype for a Connect 4 game...",
      designLink: "https://www.figma.com/design/XZ3bnotmyYnQ6OkCsLjO82/CONNECT-4",
      prototypeLink: "https://www.figma.com/proto/XZ3bnotmyYnQ6OkCsLjO82/CONNECT-4?node-id=5-61",
      hoverMessage: "Fun game interface with player turns and score tracking.",
    },
    {
      image: UiDesign3,
      title: "Tic-Tac-Toe Game UI",
      description: "A simple mobile app UI concept for Tic Tac Toe...",
      designLink: "https://www.figma.com/design/x8MIyQfdEzIsdPePl0Ptkw/TIC-TAC-TOE",
      prototypeLink: "https://www.figma.com/proto/x8MIyQfdEzIsdPePl0Ptkw/TIC-TAC-TOE?node-id=2-274",
      hoverMessage: "Minimalist mobile UI for a fast-paced game experience.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const handleNext = () => setCurrent((prev) => (prev + 1) % uiuxProjects.length);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? uiuxProjects.length - 1 : prev - 1));

  const [ref1, controls1] = useScrollAnimation(); // Emart
  const [ref2, controls2] = useScrollAnimation(); // UI/UX
  const [ref3, controls3] = useScrollAnimation(); // Portfolio

  return (
    <section id="projects" className="bg-secondary text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <h1 className="text-4xl font-bold font-hero-font text-center border-b-2 w-fit mx-auto mb-12">
          Projects
        </h1>

        {/* Emart Project */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-2xl font-semibold">Emart – Grocery Web Application</h2>
            <p>Emart is a full-stack grocery web application built using HTML, CSS and JS...</p>
            <p>It allows users to browse products, manage a cart, and simulate orders with clean UI.</p>
            <a
              href="https://github.com/KavitaSri06/emart-grocery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              View Code
            </a>
          </div>

          <motion.div
            ref={ref1}
            animate={controls1}
            initial={{ opacity: 0, x: 300 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={EmartImg}
              alt="Emart Project"
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] xl:w-[70%] h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* UI/UX Design Showcase */}
        <div className="w-full mt-6">
  <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto px-5">
    {/* Image with buttons */}
    <div className="relative md:w-1/2 flex justify-center items-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-black px-3 py-2 rounded-full shadow hover:bg-gray-300 z-10"
      >
        &#8592;
      </button>

      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, x: 300 }}
        className="w-full max-w-[600px]"
      >
        <div className="relative group w-full">
          <img
            src={uiuxProjects[current].image}
            alt={uiuxProjects[current].title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center text-center px-4 transition duration-300 rounded-lg">
            <p className="text-sm text-white">
              {uiuxProjects[current].hoverMessage}
            </p>
          </div>
        </div>
      </motion.div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-black px-3 py-2 rounded-full shadow hover:bg-gray-300 z-10"
      >
        &#8594;
      </button>
    </div>

    {/* Text */}
    <div className="md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0">
      <h3 className="text-2xl font-semibold">{uiuxProjects[current].title}</h3>
      <p>{uiuxProjects[current].description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href={uiuxProjects[current].designLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          View Design
        </a>
        <a
          href={uiuxProjects[current].prototypeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          View Prototype
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Portfolio Website */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-2xl font-semibold">Portfolio Website</h2>
            <p>A responsive and modern personal portfolio built using React and Tailwind CSS...</p>
            <a
              href="https://github.com/your-username/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              View Code
            </a>
          </div>

          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, x: 300 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={PortfolioIMg}
              alt="Portfolio Website"
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] xl:w-[70%] h-auto object-contain rounded-lg shadow-lg border-4 border-gray-900"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
