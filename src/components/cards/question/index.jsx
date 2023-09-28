import { Link } from "react-router-dom";
import { timeAgo } from "~/utils/date";
import PropTypes from "prop-types"

export default function QuestionCard({ item }){

    return(

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
        
    )
    
}

QuestionCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired
            
        }),
        date : PropTypes.string.isRequired        
    })
}