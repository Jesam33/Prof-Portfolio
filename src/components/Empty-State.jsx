import Image from "next/image";
import duckImage from "../../public/searching-duck.gif";

export default function EmptyState({ icon, title, message, value }) {
  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-primary-bg bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-200 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500">
        {icon ? icon : (
          <Image
            width={80}
            height={80}
            src={duckImage}
            alt="Yellow duck searching"
          />
        )}
      </div>
      <h3 className="font-bold tracking-tight text-xl mb-3">
        {title ? title : `No ${value ?? "Results"} Found`}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 ml-4 max-w-sm">
        {message
          ? message
          : `There are no ${value ? value.toLowerCase() : "results"} available at this time. Check back again.`}
      </p>
    </div>
  );
}
