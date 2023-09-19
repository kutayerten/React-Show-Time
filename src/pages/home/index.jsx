import Section from "~/components/section";
import { categories } from "~/fake-api/categories";
import { Swiper , SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import {AiFillFile} from "react-icons/ai"; 
import {BsFillCameraVideoFill} from "react-icons/bs"; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      
    <Section 
    title="Kendine Deger Kat!"
    description="Iyi Bir kariyer icin Almanyada Show yap adamim benim "
    >

<Swiper
      spaceBetween={50}
      slidesPerView={5}
      className="pb-12"
      modules={[Pagination]}
      pagination={{ 
        clickable: true,
        dynamicBullets: true
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {categories.map((category,key) =>(
        <SwiperSlide key={key}>
          <Link 
          style={{'--color': category.color}}
          to="/"
          className="border border-zinc-200 hover:border-zinc-400 flex flex-col rounded-md items-center justify-center p-5 group"
          >

            <div className="w-24 h-24 flex items-center justify-center rounded-full border border-[color:var(--color)] border-zinc-200 mb-2.5 relative before:w-24 before:h-24 before:absolute before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-20">
            <img src={category.icon} className="max-h-[50%]" alt="" />
            </div>
            
            <div className="h-9 px-4 text-15 font-medium rounded text-white flex items-center justify-center bg-[color:var(--color)]">
            {category.title}
            </div>
            <div className="border-t group-hover:border-zinc-400 border-zinc-200 grid grid-cols-2 gap-x-4  text-sm text-zinc-500 pt-4 mt-4 group-hover:text-zinc-700 group-hover:dark:text-zinc-300">
              <div className="flex flex-col gap-y-1.5 items-center text-center">
              <AiFillFile size={16}/>
               {category.articleCount}
              </div>
              <div className="flex flex-col gap-y-1.5 items-center text-center">
              <BsFillCameraVideoFill size={16}/>
               {category.videoCount}
              </div>
            </div>

          </Link>
          </SwiperSlide>
      ))}
    </Swiper>
    </Section>

    <Section 
    title="Germany is better"
    description="Berlin'de yasam guzelmis diyolar"
    />

    <Section 
    title="Maybe America is better"
    description="Miami'de yasam guzelmis diyolar"
    />

    <Section 
    title="Or Switzerland is better"
    description="Basel'de yasam guzelmis diyolar"
    />

    </div>
  )
}
