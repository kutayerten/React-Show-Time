
import SocialCard from "~/components/cards/social";
import Articles from "./sections/articles";
import Categories from "./sections/categories";
import LastQuestions from "./sections/last-questions";
import LastUsers from "./sections/last-users";



export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">

   <Categories />
    
    <SocialCard type="twitter"
    ctaUrl= "https://twitter.com/kutayerten"
    />

    <LastQuestions />

    <Articles />

    <SocialCard type="instagram"
    ctaUrl= "https://instagram.com/kutayertenn"
    />

    <LastUsers />

    </div>
  )
}
