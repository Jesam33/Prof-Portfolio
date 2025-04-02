import { socialLinks } from "@/app/Data/Social-links";
import RefLink from "./Reflink";

export default function Social({ type = "active" }) { // Default to "active"
    return (
      <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
        {socialLinks
          .filter((item) => item.status === type)
          .map((value) => {
            const IconComponent = value.icon;
            return (
              <li key={value.id}>
                <RefLink
                  href={value.url}
                  className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
                >
                  <IconComponent
                    className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                    aria-hidden="true"
                  />
                  &nbsp; {value.name}
                </RefLink>
              </li>
            );
          })}
      </ul>
    );
  }
  