"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Slide } from "@/app/Animation/Slide";
import RefLink from "@/components/Reflink";
import EmptyState from "@/components/Empty-State";
import { RiBriefcase3Fill } from "react-icons/ri";

// Import JSON data
import jobsData from "@/app/Data/Job";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  // Load JSON data on component mount
  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      {jobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {jobs.slice(0, 4).map((job) => (
              <div
                key={job._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <RefLink
                  href={job.url}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                >
                  <Image
                    src={job.logo}
                    className="object-cover duration-300"
                    alt={`${job.name} logo`}
                    width={50}
                    height={50}
                  />
                </RefLink>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{job.name}</h3>
                  <p>{job.jobTitle}</p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {new Date(job.startDate).toLocaleDateString()} -{" "}
                    {job.endDate ? (
                      new Date(job.endDate).toLocaleDateString()
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => router.push("/projects")}
              className="px-6 py-2 rounded-md flex items-center gap-[2px] text-white hover transition"
            >
              See More <FaChevronRight></FaChevronRight>
            </button>
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Work Experience Not Provided"
          message="No work experience data found. Add some jobs to the JSON file!"
        />
      )}
    </section>
  );
}
