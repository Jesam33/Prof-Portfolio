import HeroSvg from "@/assets/Icon/HeroSvg";
import Job from "@/components/Job";
import Social from "@/components/Socials";
import { Slide } from "@/app/Animation/Slide";
import {
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaCity,
  FaGlobe,
  FaUsers,
  FaComments,
} from "react-icons/fa";
import ContributionGraph from "@/components/Contribution-Graph";
import AnimatedHeader from "@/components/AnimatedHeader";

export default async function Home() {
  const services = [
    {
      title: "GIS & Remote Sensing Consultation",
      desc: "Spatial data analysis, mapping, and environmental impact assessments.",
      icon: <FaMapMarkedAlt size={30} />,
      bg: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Academic Research & Consultancy",
      desc: "Research project supervision, policy analysis, and community-based research.",
      icon: <FaChalkboardTeacher size={30} />,
      bg: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      title: "Transportation & Urban Planning Solutions",
      desc: "Sustainable transport planning, smart city solutions, and traffic analysis.",
      icon: <FaCity size={30} />,
      bg: "bg-gradient-to-r from-orange-500 to-orange-700",
    },
    {
      title: "Disaster Risk Management & Climate Advisory",
      desc: "Risk assessment, mitigation planning, and climate change adaptation strategies.",
      icon: <FaGlobe size={30} />,
      bg: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
      title: "Capacity Building & Training",
      desc: "Workshops and training on GIS, Remote Sensing, and urban planning.",
      icon: <FaUsers size={30} />,
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    {
      title: "Public Speaking & Guest Lecturing",
      desc: "Keynote speeches, university lectures, and expert panel discussions.",
      icon: <FaComments size={30} />,
      bg: "bg-gradient-to-r from-teal-500 to-teal-700",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Prof. dr. ir. Inah Eteng Okon
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Highly motivated and experienced academic with over 16 years in higher education, specializing in Geographical Information Systems (GIS), Remote Sensing (RS), urban planning, disaster risk management, and sustainable development.
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <Slide delay={0.14}>
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold ">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
            <div
            key={index}
            className="p-8 rounded-2xl shadow-xl text-white flex flex-col items-center text-center backdrop-blur-lg 
                       bg-zinc-800 dark:bg-white/10 dark:border dark:border-white/20"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm text-gray-200">{service.desc}</p>
            <button className="mt-6 border-2 border-white text-white px-5 py-2 rounded-full transition-all duration-300 bg-transparent hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
          
            ))}           
          </div>
        </section>
      </Slide>
      {/* <ContributionGraph /> */}
      <Job />
    </main>
  );
}
