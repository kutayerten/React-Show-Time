import { Link } from "react-router-dom";
import { timeAgo } from "~/utils/date";
import { getContrastColor } from "~/utils/helpers";
import PropTypes from "prop-types"

export default function ArticleCard({ item }){

    return(
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
    )

}


ArticleCard.propTypes = {
    item: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        })

        
    })
}

