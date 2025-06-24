import AboutImg from '../assets/kavita.jpeg'; 
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-primary py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
        
        {/* Left Side - Image with Hover Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          {/* 👇 This group wraps image + overlay */}
          <div className="relative group w-full max-w-sm md:max-w-md">
            <img
              src={AboutImg}
              alt="About Kavita"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 rounded-lg text-white text-xl text-center px-4">
              Trainee Engineer at Loyola ICAM College of Engineering & Technology (LICET)
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-white font-hero-font">
          <h1 className="text-4xl font-bold border-b-2 border-white mb-5 w-fit">
            About Me
          </h1>

          <p className="text-lg leading-relaxed mb-4">
I'm a passionate tech enthusiast currently pursuing my Bachelor's degree in Information Technology (2023–2027). I specialize in building responsive websites and designing intuitive user interfaces that solve real-world problems.          </p>

          <p className="text-lg leading-relaxed mb-4">
I’ve participated in national-level hackathons and workshops, including the IIT Madras Bootcamp and Carpe Diem (LICET Pattarai). As a cultural and technical team player, I bring both creativity and problem-solving skills to every project I take on.          </p>

          <p className="text-lg leading-relaxed mb-4">
I'm fluent in English, Hindi, Marathi, and Tamil — and I enjoy collaborating with diverse teams to build meaningful digital solutions.          </p>

          <p className="text-lg leading-relaxed">
I believe in consistency over perfection and aim to grow one step at a time.
I'm currently learning full-stack development and open to internship opportunities in web development and UI/UX design.          </p>
           <div className="mt-6">
  <a
    href="/KavitaSri_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    View Resume
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
