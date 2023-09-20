import Section from "~/components/section";
import { categories , lastQuestions , articles ,users } from "~/fake-api";
import { Link } from "react-router-dom";
import {AiFillFile} from "react-icons/ai"; 
import {BsFillCameraVideoFill} from "react-icons/bs"; 
import Slider from "~/components/slider";
import { timeAgo } from "~/utils/date";
import { getContrastColor } from "~/utils/helpers";
import Button from "~/components/button";



export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      
    <Section 
    title="Kendine Deger Kat!"
    description="Iyi Bir kariyer icin Almanyada Show yap adamim benim "
    >

    <Slider
    slidesPerView={1}
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
    items={categories}
    render={(item) => (
      <Link 
          style={{'--color': item.color, '--text-color': getContrastColor(item.color)}}
          to={`/${item.slug}`}
          className="border border-zinc-200 hover:border-zinc-400 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition-shadow  flex flex-col rounded-md items-center justify-center px-5 py-7 group "
          >

            <div className="w-24 h-24 flex items-center justify-center rounded-full border border-[color:var(--color)] border-zinc-200 mb-2.5 relative before:w-24 before:h-24 before:absolute before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-20">
            <img src={item.icon} className="max-h-[50%]" alt="" />
            </div>
            
            <div className="h-9 px-4 text-15 font-medium rounded text-[color:var(--text-color)] flex items-center justify-center bg-[color:var(--color)] ">
            {item.title}
            </div>
            <div className="border-t group-hover:border-zinc-400 border-zinc-200 grid grid-cols-2 gap-x-4  text-sm text-zinc-500 pt-4 mt-4 group-hover:text-zinc-700 group-hover:dark:text-zinc-300">
              <div className="flex flex-col gap-y-1.5 items-center text-center">
              <AiFillFile size={16}/>
               {item.articleCount}
              </div>
              <div className="flex flex-col gap-y-1.5 items-center text-center">
              <BsFillCameraVideoFill size={16}/>
               {item.videoCount}
              </div>
            </div>

          </Link>
    )}
    />
    
    </Section>

    <Section 
    title="Germany is better"
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
      items={lastQuestions}
      render= {item =>(
        <Link 
        to={`/soru/${item.id}-${item.slug}`}
        className="p-5 border hover:border-zinc-400 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition-shadow rounded-md flex flex-col gap-y-2.5">
          <div className="flex items-center gap-x-2.5 text-sm text-blue-400 font-medium">
            <img src={item.user.avatar} className="w-6 h-6 rounded-full object-cover" />
            {item.user.name}
          </div>
          <h6 className="line-clamp-1 text-lg mt-2.5 font-semibold text-primary dark:text-white/80" >{item.title}</h6>
          <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>
        </Link>
      )}
      />

    </Section>

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
      items={articles}
      render={item => (
        <Link
        to={`/makaleler/${item.slug}`}
        className="p-5 border hover:border-zinc-400 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition-shadow rounded-md flex flex-col gap-y-2.5 "
        >
          <div 
          style={{'--color': item.category.color, '--text-color': getContrastColor(item.category.color)}}
          className="h-8 px-4 rounded text-sm font-medium bg-[color:var(--color)] text-[color:var(--text-color)] self-start flex items-center">
            {item.category.name}
          </div>

          <h6 className="text-xl font-medium text-black dark:text-white/80">{item.title}</h6>
          <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>
          <div className="flex items-center gap-x-2.5 text-sm text-zinc-400 font-medium">
            <img src={item.user.avatar} className="w-6 h-6 rounded-full object-cover" />
            {item.user.name}
          </div>
        </Link>
      )}
      
      />

    </Section>

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
      items={users}
      render={item => (
        <Link
        className="p-6 border hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md flex flex-col gap-y-2.5 text-center items-center justify-center hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition-shadow"
        >
        <img src={item.avatar} className="w-16 h-16 rounded-full object-cover" />
        <header>
          <h6 className="font-semibold text-primary line-clamp-1 dark:text-white">
          @{item.name}
          </h6>
          <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>

        </header>
        <Button size="small" className="w-full">Takip Et</Button>
        </Link>
      )}
      />
        


      </Section>
    </div>
  )
}
