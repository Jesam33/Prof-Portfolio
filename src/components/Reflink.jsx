import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export default function RefLink({
  href,
  children,
  className,
  target = "_blank",
}) {
  return (
    <Link
      href={href + "?ref=victoreke.com"}
      rel="noopener"
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
