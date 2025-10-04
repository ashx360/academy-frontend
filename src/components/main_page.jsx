import React from "react";
import myPhoto from "../assets/ASH.png"; 
import insta from "../assets/instagram-svgrepo-com.svg"; 
import linkedin from "../assets/linkedin-svgrepo-com.svg"; 

function MainPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="bg-[url('bg-main.jpg')] bg-cover bg-center bg-no-repeat h-screen px-6 flex items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
    <div className="flex justify-center">
      <img
        src={myPhoto} 
        alt="Mirzaldi"
        className="w-96 sm:w-80 md:w-129 lg:w-160 xl:w-192 h-auto object-cover rounded-2xl "
      />
    </div>

    <div className="text-right ml-auto max-w-xl">
      <h1 className="text-[80px] lg:text-[100px] font-black italic font-helvetica-glow mb-4">
  Mirzaldi Pasha
</h1>
      <p className="text-lg">
        I am interested in web development and robotics engineering.
      </p>
    </div>
  </div>
</section>


      <section id="about" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-black font-helvetica-glow mb-4">ABOUT</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Hi Visitor! My name is Mirzaldi Pasha,
      I go by the nickname Ash, I was born at Jakarta, Indonesia.
      Currently I'm studying electrical engineering at Telkom University.
        </p>
      </section>

      <section id="portfolio" className="py-16 px-6 md:px-20 text-center">
  <h2 className="text-3xl font-black font-helvetica-glow mb-10">Portofolio</h2>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      {[
        {
          title: "Web Development",
          desc: "My portfolio website and projects.",
          link: "https://ashx360.vercel.app/",
        },
        {
          title: "Air Quality Monitoring Robot",
          desc: "Year : 2023",
          link: "https://www.youtube.com/watch?v=ff7B21L4Ooc",
        },
        {
          title: "Integrated Smart Village",
          desc: "Year : 2022",
          link: "https://www.youtube.com/watch?v=_b5FUkOal2o",
        },
      ].map((service, i) => (
        <div
          key={i}
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-white transition"
        >
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="mb-4">{service.desc}</p>
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-black bg-white px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



      <section id="contact" className="py-16 px-6 md:px-20 text-center bg-gray-800">
  <h2 className="text-3xl font-black font-helvetica-glow mb-4">Contact Me</h2>

  <div className="flex flex-col items-center space-y-4">
    <a
      href="https://instagram.com/not.xsh"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4"
    >
      <img src={insta} alt="Instagram" className="w-8 h-8 invert hover:scale-110 transition-transform duration-300" />
      <p className="text-lg">@not.xsh</p>
    </a>

    <a
      href="https://linkedin.com/in/mirzaldipasha"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4"
    >
      <img src={linkedin} alt="LinkedIn" className="w-8 h-8 invert hover:scale-110 transition-transform duration-300" />
      <p className="text-lg">linkedin.com/in/mirzaldi</p>
    </a>
  </div>
</section>
    </div>
  );
}

export default MainPage;