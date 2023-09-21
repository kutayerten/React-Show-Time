import Section from "~/components/section";
import Slider from "~/components/slider";
import { users as data } from "~/fake-api"; 
import UserCard from "~/components/cards/user";

export default function LastUsers(){

    return(
        <Section 
        title="Or Switzerland is better"
        description="Basel'de yasam guzelmis diyolar"
        >
          <Slider 
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1170: {
              slidesPerView: 4
            },
            1370: {
              slidesPerView: 5
            },
          }}
          items={data}
          render={item => <UserCard item={item}/>}
          />
            
    
    
          </Section>
    )
}