import Section from "~/components/section";
import Slider from "~/components/slider";
import QuestionCard from "~/components/cards/question";
import { lastQuestions as data } from "~/fake-api";

export default function LastQuestions(){
    return (
<Section 
    title="Germany is better Last Questions"
    description="Berlin'de yasam guzelmis diyolar"
    >

      <Slider 
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1280: {
          slidesPerView: 3
        },
      }}
      items={data}
      render= {item => <QuestionCard item={item} />}
      />

    </Section>
    )
}