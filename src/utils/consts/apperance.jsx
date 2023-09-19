import { LuMoonStar } from "react-icons/lu"
import { BsSun } from "react-icons/bs"
import { SlSettings } from "react-icons/sl"



export const apperance =  [
    {
        key: 'default',
        value: 'apperance.default'
    },
    {
        key: 'light',
        value: 'apperance.light'
    },
    {
        key: 'dark',
        value: 'apperance.dark'
        }
]

export const getApperanceName = key => apperance.find( a => a.key === key)?.value
export const getApperanceIcon = (key, colorScheme = false) => {
    switch(key){
        case 'default':
            if (!colorScheme){

                return<SlSettings size={16}/>
            } else{
                if(colorScheme === 'light'){
                    return<BsSun size={16}/>
                }else{
                    return<LuMoonStar size={16} />
                }
            }
            
        case 'light':
            return<BsSun size={16}/>
        case 'dark':
                return<LuMoonStar size={16}/>
    }
}



export const languages = [
    {
        key: 'tr',
        value: 'Turkce'
    },
    {
        key: 'de',
        value: 'Deutsch'
    },
    {
        key: 'gb',
        value: 'English'
    }
]

export const getLanguageName = langCode => languages.find(l => l.key === langCode)?.value