
import SocialCard from "~/components/cards/social";
import Articles from "./sections/articles";
import Categories from "./sections/categories";
import LastQuestions from "./sections/last-questions";
import LastUsers from "./sections/last-users";
import OpacityContent from "~/components/animated/opacity";



export default function Home() {
  return (
    <OpacityContent className="max-w-[1200px] mx-auto" >

    {import.meta.env.MODE}

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

    </OpacityContent>
  )
}
