import Section from "~/components/section";
import Slider from "~/components/slider";
import { articles as data } from "~/fake-api";
import ArticleCard from "~/components/cards/article";


export default function Articles(){

    return(
        <Section
    title="Maybe America is better"
    description="Miami'de yasam guzelmis diyolar"
    >
      <Slider 
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        1280: {
          slidesPerView: 2
        },
      }}
      items={data}
      render={item => <ArticleCard item={item} />}
      
      />

    </Section>
    )

}