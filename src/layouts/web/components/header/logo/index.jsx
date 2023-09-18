import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-semibold dark:text-white text-primary transition-colors">
      Kutay Erten Show
      <span className="text-sm ml-2 text-zinc-400">
        v2
      </span>
    </Link>
  )
}
