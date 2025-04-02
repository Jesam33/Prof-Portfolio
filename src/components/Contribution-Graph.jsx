"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  const [year, setYear] = useState(new Date().getFullYear());
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState(undefined); 

  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  // Ensure theme is set after rendering to prevent mismatch
  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  return (
    <section>
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <div className="flex items-center space-x-6">
          {/* Contribution Graph Container */}
          <div className="dark:bg-[#27272b66] bg-[#fafafa66] border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
            <GitHubCalendar username="jesam33" year={year} blockSize={15} colorScheme={serverTheme}  />
          </div>

          {/* Year Selection */}
          <div className="flex flex-col gap-2 mb-4">
            {[2021, 2022, 2023, 2024, 2025].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
                  year === y
                    ? "dark:bg-[#0CCE6B] bg-[#0CCE6B] dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
                    : "dark:bg-[#27272b66] bg-zinc-50 dark:text-white text-zinc-800"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </Slide>
    </section>
  );
}
