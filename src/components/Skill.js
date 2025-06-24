
import { SiTata ,SiInfosys} from "react-icons/si";
import { motion } from 'framer-motion';
import TataCert from "../assets/tata_page-0001.jpg";
import SkillrackCert from "../assets/skillrack1.PNG";
import InfosysCert from "../assets/infosys_page-0001.jpg";
import CProgrammingCert from "../assets/skillrack2.PNG";
import MatlabCet1 from "../assets/matlab_page-0001.jpg";
import MatlabCert from "../assets/matlab2_page-0001.jpg";
import NptelCert from "../assets/Data Base Management System.jpg"

export default function Skills() {
  const skills = [
    "Python", "Java", "C",
    "HTML", "CSS", "JavaScript",
    "React.js", "Tailwind CSS",
    "Figma", "Canva", "Photoshop",
    "Design Thinking", "DBMS-MySQL",
    "Communication", "Leadership", "Team Collaboration"
  ];

  const certifications = [
    { title: "Data Visualization", platform: "Tata Virtual Internship", image: TataCert },
    { title: "Statistics with Python", platform: "Infosys Springboard", image: InfosysCert },
    { title: "MATLAB Onramp", platform: "MathWorks", image: MatlabCet1 },
    { title: "MATLAB Simulink", platform: "MathWorks", image: MatlabCert },
    {title: "Data Base Management System", platform: "NPTEL", image: NptelCert}
  ];

  const coding = [
    { title: "Python Programming", platform: "SkillRack", image: SkillrackCert },
    { title: "C Programming", platform: "SkillRack", image: CProgrammingCert },
  ];

  return (
    <section id="skills" className="bg-secondary overflow-x-hidden overflow-y-hidden text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Skills Section */}
         <motion.h1
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="text-4xl font-bold text-center font-hero-font border-b-2 w-fit mx-auto mb-12"
>
  Skills
</motion.h1>
        

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-primary px-4 py-2 rounded-md shadow-md text-sm md:text-base font-medium hover:bg-accent transition-all"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="text-4xl font-bold text-center font-hero-font border-b-2 w-fit mx-auto mb-12"
>
  Certification
</motion.h1>
       
        <div className="mb-3 flex flex-row space-x-5 justify-center gap-4">
        <SiTata  size={50}/>
          <SiInfosys size={50} />
           <img
    src="https://cdn.brandfetch.io/idQnawBRUH/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    alt="MathWorks"
    className="w-[100px] h-auto"
  /> 
        </div>
        

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {certifications.map((cert, index) => (
    <div
      key={index}
      className="relative  rounded-lg overflow-hidden group  mx-auto  my-auto"
    >
      <img
        src={cert.image}
        alt={cert.title}
 className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain mx-auto"      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center text-center p-2 transition duration-300">
        <p className="text-white md:text-2xl font-medium">
          {cert.title} <br />
          <span className="md:text-xl">({cert.platform})</span>
        </p>
      </div>
    </div>
      
  ))}
</div>
{/* Pratice Section */} 
       <motion.h1
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="text-4xl font-bold text-center font-hero-font border-b-2 w-fit mx-auto mb-12"
>
  Coding Pratice & Progress
</motion.h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {coding.map((cert, index) => (
    <div
      key={index}
      className="relative  rounded-lg overflow-hidden group  mx-auto  my-auto"
    >
      <img
        src={cert.image}
        alt={cert.title}
 className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain mx-auto"      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center text-center p-2 transition duration-300">
        <p className="text-white md:text-2xl font-medium">
          {cert.title} <br />
          <span className="md:text-xl">({cert.platform})</span>
        </p>
      </div>
    </div>
      
  ))}
</div>
</div>
     
    </section>
  );
}
