import { ArrowLeftIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        viewTransition={{ types: ["fade"] }}
        className="text-white flex items-center gap-x-2"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Pokédex
      </Link>
    </div>
  );
}
