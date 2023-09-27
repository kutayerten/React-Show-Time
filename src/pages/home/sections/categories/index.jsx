import Section from "~/components/section";
import Slider from "~/components/slider";
import { categories as data } from "~/fake-api"
import CategoryCard from "~/components/cards/category";

export default function Categories(){
    return(

        <Section 
        title="Kendine Deger Kat! Categories"
        description="Iyi Bir kariyer icin Almanyada Show yap adamim benim "
        >
    
        <Slider
        slidesPerView={1}
        breakpoints={{
          340: {
            spaceBetween: 15,
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
        render={(item) => <CategoryCard item={item}/>}
        />
        
        </Section>

    )
}