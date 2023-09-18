
import Button from "~/components/button"
import { setTheme } from "~/stores/app/actions"
import { useTheme } from "~/stores/app/hooks"

export default function Apperance(){

    const theme = useTheme()

    return(
        <div className="mt-auto grid gap-y-1 ">
            <Button 
             onClick={()=>{
                setTheme('default')
            }}
            variant={theme === 'default' ? 'light' : 'dark'}
            >
                System
            </Button>
            <Button 
             onClick={()=>{
                setTheme('light')
            }}
            variant={theme === 'light' ? 'light' : 'dark'}
            >
                Acik
            </Button>
            <Button 
            onClick={()=>{
                setTheme('dark')
            }}
            variant={theme === 'dark' ? 'light' : 'dark'}
            >
                Koyu
            </Button>
        </div>
    )
}