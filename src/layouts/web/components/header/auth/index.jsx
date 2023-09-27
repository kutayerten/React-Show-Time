import Button from "~/components/button";
import { useAuth } from "~/stores/auth/hooks";
import { modal } from "~/stores/modal/actions";
import { Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";
import { removeUser } from "~/stores/auth/actions.js";
import { MdArrowDropDown } from "react-icons/md";
import classNames from "classnames";
import { useBreakpoint } from "~/hooks/use-breakpoint";
import {FiUser} from "react-icons/fi";

function UserMenu(){

  const user = useAuth()
  
  return(
    <Menu as="nav" className="relative">
      <Menu.Button className="flex items-center gap-x-2.5 text-15 font-medium">
      <img src="https://avatars.githubusercontent.com/u/58105141?v=4" alt=""
      className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex items-center dark:text-white">
      <span className="hidden md:block">@{user.username}</span>
      <MdArrowDropDown size={20} />
      </div>
      </Menu.Button>

     
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0 translate-y-0"
        enterTo="transform scale-100 opacity-100 translate-y-1.5"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100 translate-y-1.5"
        leaveTo="transform scale-95 opacity-0 translate-y-0"
      >
        <Menu.Items className="absolute top-0 right-0 w-[200px] rounded bg-white shadow-lg grid p-1.5 border border-zinc-300 dark:bg-zinc-900">
          <Menu.Item>
            {({active}) => (
          <Link 
          to="/uye/kutayerten" 
          className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
          >
            Profil
          </Link>
          )}
          </Menu.Item>

          <Menu.Item>
          {({active}) => (
          <Link 
          to="/profil"
          className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
           >
            Profil Duzenle
          </Link>
           )}
          </Menu.Item>

          <Menu.Item>
             {({active}) => (
          <Link to="/profil/takipciler"
           className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
          >
            Takipciler
          </Link>
           )}
          </Menu.Item>

          <Menu.Item>
             {({active}) => (
          <Link to="/profil/takip-ettiklerin" 
          className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
          >
            Takip Ettiklerin
          </Link>
           )}
          </Menu.Item>

          <Menu.Item>
          {({active}) => (
          <Link to="/profil/sorular" 
            className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
              "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
            })}
          >
            Sorular
          </Link>
          )}
          </Menu.Item>

          <Menu.Item>
          {({active}) => (
          <Link to="/profil/cevaplar" 
          className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
          >
            Cevaplar
          </Link>
          )}
          </Menu.Item>

          <Menu.Item>
              {({active}) => (
          <Link to="/profil/bildirimler"
           className={classNames("h-8 text-sm text-zinc-800 dark:text-zinc-300  font-medium rounded  flex items-center px-3",{
            "bg-zinc-100 dark:bg-zinc-50/20 text-black": active
          })}
           >
            Bildirimler
          </Link>
          )}
          </Menu.Item>

          <Menu.Item>
          {({active}) => (
          <button 
          className={classNames("h-8 text-sm text-red-500 font-medium rounded flex items-center px-3",{
            "bg-red-100 dark:bg-red-400/20 text-red-500": active
          })}
          onClick={() => removeUser()} 
          >
            Cikis Yap
          </button>
           )}
          </Menu.Item>

        </Menu.Items>
      </Transition>
    </Menu>
 
  )
}

export default function Auth() {

  const {breakpoint} = useBreakpoint()
  const user = useAuth()

  return (
    <>
     {(!user && breakpoint === 'desktop') && (
       <Button 
       onClick={() => modal.append('auth.login',{
         name: 'Kutay',
         surname: 'Erten'
       })}
       type="button">
         Giriş yap
       </Button>
     )}

{(!user && breakpoint !== 'desktop') && (
       <button 
       onClick={() => modal.append('auth.login',{
         name: 'Kutay',
         surname: 'Erten'
       })}
       type="button"
       className="w-9 h-9 flex items-center justify-center"
       >
         <FiUser size={24}
         className="text-black dark:text-white"
         />
       </button>
     )}

     {user && <UserMenu/>}
    </>
  )
}
