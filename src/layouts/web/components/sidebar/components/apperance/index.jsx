import { setTheme } from "~/stores/app/actions"
import { useTheme } from "~/stores/app/hooks"
import { Menu } from '@headlessui/react'
import { getApperanceIcon, getApperanceName, getLanguageName, languages } from "~/utils/consts/apperance"
import { apperance } from "~/utils/consts/apperance"
import classNames from "classnames"
import useColorScheme from "~/hooks/use-color-scheme"
import { useTranslation } from "react-i18next"


export default function Apperance(){

    const theme = useTheme()
    const {colorScheme} = useColorScheme()
    const {t , i18n} = useTranslation()

    return(
        <div className="mt-auto grid grid-cols-2 gap-y-1 gap-x-2 ">

<Menu as="nav" className="w-full relative ">
      <Menu.Button className="w-full h-10 rounded text-white gap-x-2.5 font-medium border border-black bg-zinc-900 dark:bg-white dark:text-zinc-600 dark:border-white flex items-center justify-center text-sm">
        <span className="text-white/80 dark:text-black">
        {getApperanceIcon(theme , colorScheme)}
        </span>
        {t(getApperanceName(theme))}
      </Menu.Button>
      <Menu.Items as="div" className="absolute bottom-full left-0 w-[234px] bg-white dark:bg-zinc-800 border border-zinc-300 rounded overflow-hidden grid -translate-y-1">
      {apperance.map(({ key, value } , index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <button
            onClick={()=>{
                setTheme(key)
            }}
              className={classNames("h-9 px-3 flex items-center text-zinc-600 dark:text-white/80 gap-x-2.5 text-sm font-medium",{
                "bg-zinc-700 !text-white": active,
                "!bg-blue-100 dark:!bg-primary text-blue-600 dark:text-white": key === theme
              })}
              href="/account-settings"
            >
               <span className={classNames({
                "!text-white": active,
                "text-black dark:text-white": !active,
                "text-blue-800 dark:text-white ": key === theme
               })}>
               {getApperanceIcon(key)}
               </span>
              {t(value)}
            </button>
          )}
        </Menu.Item>
      ))}
        
        
        
      </Menu.Items>
    </Menu>

    
<Menu as="nav" className="w-full relative ">
      <Menu.Button className="w-full h-10 rounded text-black gap-x-2.5 font-medium border border-black bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 flex items-center justify-center text-sm">
        
        <img src={`https://flagcdn.com/${i18n.language}.svg`}
         className="w-5 h-5 object-contain"
        alt={getLanguageName(i18n.language)}
        />
        {i18n.language.toLocaleUpperCase()}
      </Menu.Button>
      <Menu.Items as="div" className="absolute bottom-full right-0 w-[234px] bg-white dark:bg-zinc-800 border border-zinc-300 rounded overflow-hidden grid -translate-y-1">
      {languages.map(({ key, value } , index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <button
            onClick={()=>{
              i18n.changeLanguage(key) 
            }}
              className={classNames("h-9 px-3  flex items-center gap-x-2.5 text-zinc-600 dark:text-white/80 text-sm font-medium",{
                "bg-zinc-700 !text-white": active,
                " dark:bg-primary text-blue-600 dark:text-white": key === i18n.language
              })}
              href="/account-settings"
            >
                <img src={`https://flagcdn.com/${key}.svg`}
         className="w-5 h-5 object-contain"
        alt={value} 
        />
              {value}
            </button>
          )}
        </Menu.Item>
      ))}
        
        
        
      </Menu.Items>
    </Menu>
</div>
    )
}