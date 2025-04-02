"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Slide } from "../Animation/Slide";

export default function About() {
  const profile = {
    fullName: "Prof. dr. ir Inah Eteng Okon",
    location: "Calabar, Nigeria",
    bio: "Passionate researcher and educator specializing in Urban and Regional Development, Transportation Systems Planning, and Geographic Information Systems.",
    profileImage: "/images/profile.jpg",
    resumeURL: "/innah_okon.pdf",
    email: " inaheteng@gmail.com",
    skills: [
      "Excel", "Rs", "SPSS", "GIS/RS", "Community-Based Research", "ArcGIS",
      "IDRISI", "Fastat", "MapInfo Professional", "QGIS", "Microsoft Visual Basic",
      "Erdas Imagine", "Flowmap"
    ],
    education: [
      {
        institution: "Faculty of Geo-Information Science & Earth Observation, Univ of Twente, Enschede, Netherlands",
        degree: "MSc",
        duration: "September 2012 - March 2014",
        thesis: "Evaluation of Bicycle Infrastructure in Bogota, Colombia"
      },
      {
        institution: "Institute for Housing & Urban Development Studies of Erasmus University, Rotterdam, Netherlands",
        degree: "PGD",
        duration: "May 2012 - June 2012",
        project: "Developing a Local Climate Change Action Plan for the City of Negombo, Sri Lanka"
      },
      {
        institution: "Department of Geography, University of Ibadan, Ibadan, Nigeria",
        degree: "MGIS",
        duration: "September 2008 - February 2012",
        project: "Cost/Benefit Analysis of the Proposed Calabar Monorail Infrastructure"
      },
      {
        institution: "Department of Geography and Environmental Science, University of Calabar",
        degree: "PhD",
        duration: "October 2005 - February 2009",
        dissertation: "Intra-City Transportation and Land Use Planning in Nigeria: The Case of Port Harcourt Metropolis, Rivers State, Nigeria"
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-22 mt-20">
      <motion.section 
        className="flex flex-col items-center text-center pt-16"
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      >
        <motion.img 
          src={profile.profileImage} alt={profile.fullName} 
          className="rounded-full w-40 h-40 border-4 border-[#57A773] shadow-2xl"
          whileHover={{ scale: 1.1 }}
        />
        <h1 className="text-5xl font-bold mt-4 text-white">
          {profile.fullName}
        </h1>
        <p className="text-zinc-400 my-4">{profile.location}</p>
        <p className="text-lg text-zinc-400 max-w-2xl">{profile.bio}</p>
      </motion.section>

      {/* Skills Section */}
      <section className="mt-20 px-6">
        <Slide delay={0.16}>
          <div className="mb-10">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Skills
            </h2>
          </div>
        </Slide>
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {profile.skills.map((skill, index) => (
            <motion.div 
              key={skill} 
              className="relative bg-[#27272b66] text-zinc-400 px-6 py-4 rounded-xl shadow-lg text-center font-semibold backdrop-blur-lg border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-[#0CCE6B] hover:text-black"
              initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="mt-20 px-6">
        <Slide delay={0.16}>
          <div className="mb-10">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Education
            </h2>
          </div>
        </Slide>
        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <motion.div key={index} className="bg-[#27272b66] p-6 rounded-xl shadow-lg text-white backdrop-blur-lg border border-zinc-800">
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p className="text-zinc-400">{edu.degree} ({edu.duration})</p>
              {edu.thesis && <p className="text-sm text-gray-300 mt-2"><strong>Thesis:</strong> {edu.thesis}</p>}
              {edu.project && <p className="text-sm text-gray-300 mt-2"><strong>Project:</strong> {edu.project}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume & Contact */}
      <motion.section className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <a href={profile.resumeURL} download="innah_okon.pdf" className="bg-gradient-to-r from-[#E3B23C] to-[#A675A1] text-white px-5 py-3 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
          Download Resume
        </a>
        <p className="mt-4">
          <a href={`mailto:${profile.email}`} className="text-[#57A773] hover:underline text-lg">
            {profile.email}
          </a>
        </p>
      </motion.section>
    </main>
  );
}
