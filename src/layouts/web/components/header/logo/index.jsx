import { Link } from "react-router-dom";
import { useBreakpoint } from "~/hooks/use-breakpoint";

export default function Logo() {

  const {breakpoint} = useBreakpoint()

  return (
    <Link to="/" className="text-md md:text-2xl font-semibold dark:text-white text-primary transition-colors">
      Kutay Erten Show
      {breakpoint === 'desktop' && (
        <span className="text-sm ml-2 text-zinc-400">
        v2
      </span>
      )}
    </Link>
  )
}
