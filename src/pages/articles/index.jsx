import ArticleCard from "~/components/cards/article/index.jsx";
import Pagination from "~/components/pagination";
import Section from "~/components/section/index.jsx";
import { articles } from "~/fake-api/index.js";

export default function Articles() {
  return (
   <div className="max-w-[1200px] mx-auto">
    <Section 
   title="Makaleler"
   >

    <div className="grid md:grid-cols-2 gap-4">
    {articles.map((article, key) => <ArticleCard item={article} key={key} />)}
    </div>
    <Pagination count={24}/>

    </Section>
   </div>
     
    
  )
}
