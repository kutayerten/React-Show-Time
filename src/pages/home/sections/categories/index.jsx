import Section from "~/components/section";
import Slider from "~/components/slider";
import CategoryCard from "~/components/cards/category";
import { getCategories } from "~/services/home";
import { useQuery } from "@tanstack/react-query";

export default function Categories(){

 const {data, isLoading, isError, error} = useQuery(['categories'], () => getCategories(),{
  retry: 1,
  refetchOnWindowFocus: false
 })

 console.log(
  'isError' , isError
 )
 console.log(
  'error', error
 )

    return(

        <Section 
        title="Kendine Deger Kat! Categories"
        description="Iyi Bir kariyer icin Almanyada Show yap adamim benim "
        >
    
       {isLoading && '.....'}
       {isError && (
        <div className="bg-red-50 p-4 text-sm rounded text-red-500">
          {error.meesage}
        </div>
       )}
       {data && (
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
       )}
        
        </Section>

    )
}