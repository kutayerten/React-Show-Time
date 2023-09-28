import PropTypes from "prop-types"
import classNames from "classnames"
import {FaInstagram, FaTwitter} from "react-icons/fa"
import Button from "~/components/button"

function getSocialMediaIcon(type){
    switch(type){
        case 'twitter':
            return <FaTwitter size={45} className="relative -left-4" />
            case 'instagram':
            return <FaInstagram size={45} className="relative -left-4" />
    }
}

function getSocialMediaTitle(type){
    switch(type){
        case 'twitter':
            return <>Don&#39;t forget to subscribe <b>@kutayerten</b> on Twitter</>
        case 'instagram':
            return <>Don&#39;t forget to follow <b>@kutayertenn</b> on Instagram</>
    }

    

}

function getSocialMediaDescription(type){
    switch(type){
        case 'twitter':
            return <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>
    
    case 'instagram':
            return <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>
    }

    
}

export default function SocialCard({ type, ctaText , ctaUrl}){
    return(
        <div className={classNames("px-10 py-5 rounded-md mb-10 text-white flex flex-col md:flex-row md:items-center gap-y-5 gap-x-7",{
            "bg-[#1da1f2]": type === 'twitter',
            "bg-gradient-to-r from-[#405e6e] via-[#833ab4] to-[#e1306c]": type === 'instagram'
        })}>
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white/10">
            {getSocialMediaIcon(type)}
            </div>
            <div>
                <h6 className="text-lg md:text-xl font-medium ">{getSocialMediaTitle(type)}</h6>
                <p className="text-white/70 text-sm md:text-base mb-3 mt-2 md:mt-0">{getSocialMediaDescription(type)}</p>
                <Button 
                as="a"
                target="_blank"
                href={ctaUrl}
                variant="light" >
                    {ctaText}
                </Button>
            </div>
        </div>
    )
}

SocialCard.propTypes = {
    type: PropTypes.oneOf(['telegram', 'instagram', 'twitter']),
    ctaText: PropTypes.string,
    ctaUrl: PropTypes.string
    
}

SocialCard.defaultProps ={
    ctaText: 'Follow'
}