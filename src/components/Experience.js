export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 bg-primary text-white">
      <h1 className="text-4xl font-bold font-hero-font text-center mb-10 border-b-2 w-fit mx-auto">
        Experience
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Box 1 - Smart India Hackathon */}
        <div className="bg-secondary p-6 rounded-lg shadow-lg hover:bg-violet-500 transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Smart India Hackathon 2024</h2>
          <h3 className="text-md font-medium text-gray-300 mb-3">Role: Team Lead & Research Analyst</h3>
          <p className="text-base leading-relaxed">
  Led a team of 5 in the Smart India Hackathon 2024, contributing as a research analyst for a MedTech app prototype named <strong>Medify</strong>. I organized domain-specific insights, structured the solution approach, and guided the early ideation phase — translating real-world healthcare problems into feature logic and documentation.
          </p>
        </div>

        {/* Box 2 - Internship at Electronics Company */}
        <div className="bg-secondary p-6 rounded-lg shadow-lg hover:bg-violet-500 transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Internship – Premier Combines(KwikLite)</h2>
          <h3 className="text-md font-medium text-gray-300 mb-3">Role: Technical Intern (Project Observer & Learner)</h3>
          <p className="text-base leading-relaxed">
            Interned at a small-scale electronics manufacturer where I observed the development of <strong>NFC-based door locking systems</strong> using ESP32 microcontrollers.  
  Gained valuable exposure to <strong>IoT circuit design</strong>, embedded system logic, and real-world <strong>hardware-software integration</strong> through practical demonstrations and technical discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
