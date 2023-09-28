import { AiFillFile } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getContrastColor } from "~/utils/helpers";
import PropTypes from "prop-types"

export default function CategoryCard({ item }){
    return(
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
                  <BsFillCameraFill size={16}/>
                   {item.videoCount}
                  </div>
                </div>
    
              </Link>
    )
}

CategoryCard.propTypes= {
    item: PropTypes.shape({
        color: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        articleCount: PropTypes.number,
        videoCount: PropTypes.number

    })
}

CategoryCard.defaultProps = {
    articleCount: 0,
    videoCount: 0 
}