"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Slide } from "@/app/Animation/Slide";
import RefLink from "@/components/Reflink";
import EmptyState from "@/components/Empty-State";
import { RiBriefcase3Fill } from "react-icons/ri";
import jobsData from "@/app/Data/Job";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <section className="mt-32 container mx-auto px-6">
      <Slide delay={0.16}>
        <div className="mb-16 text-center">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            All Work Experience
          </h2>
        </div>
      </Slide>

      {jobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="p-6 border dark:border-zinc-800 border-zinc-200 rounded-lg shadow-lg dark:bg-zinc-900 bg-white flex flex-col"
              >
                <RefLink
                  href={job.url}
                  className="flex justify-center items-center bg-secondary-bg dark:bg-primary-bg border dark:border-zinc-800 border-zinc-200 p-3 rounded-md overflow-hidden"
                >
                  <Image
                    src={job.logo}
                    className="object-cover"
                    alt={`${job.name} logo`}
                    width={60}
                    height={60}
                  />
                </RefLink>
                <h3 className="text-xl font-semibold mt-4">{job.name}</h3>
                <p className="text-lg text-zinc-500">{job.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2">
                  {new Date(job.startDate).toLocaleDateString()} - {" "}
                  {job.endDate ? (
                    new Date(job.endDate).toLocaleDateString()
                  ) : (
                    <span className="text-tertiary-color dark:text-primary-color">
                      Present
                    </span>
                  )}
                </time>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="No Work Experience Available"
          message="No job records found. Add jobs to the JSON file!"
        />
      )}
    </section>
  );
};

export default AllJobs;
