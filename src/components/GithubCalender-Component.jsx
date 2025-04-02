import GitHubCalendar from 'react-github-calendar'
import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section>
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
      <GitHubCalendar username="jesam33" />
      </Slide>
    </section>
  );
}
