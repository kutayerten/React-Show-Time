import { useModals } from "~/stores/modal/hooks"
import { modals as modalRoutes} from "~/routes/modals"
import { modal } from "~/stores/modal/actions"
import OpacityContent from "~/components/animated/opacity"
import AnimatedContent from "~/components/animated"
import { AnimatePresence } from "framer-motion"

export default function Modals(){

    const modals= useModals()


    return(
        <OpacityContent 
        exitDelay={0.1}
        className="fixed inset-0 z-[9999] bg-zinc-700/40 backdrop-blur flex items-center px-4 md:px-0 justify-center flex-wrap overflow-auto py-6 ">
            
               <AnimatePresence>
               {modals.map(modalData => {
                    const current = modalRoutes.find( m => m.name === modalData.name )
                    return (
                    <AnimatedContent 
                    delay= {0.1}
                    key={modalData.name} className="bg-white dark:bg-zinc-800 min-w-full md:min-w-[400px] max-w-full grid rounded-md overflow-hidden shadow-lg border border-zinc-300 hidden last:block dark:text-white">
                        <current.element
                        key={modalData.name} 
                        destroy={modal.destroy} 
                        destroyAll={modal.destroyAll}
                        modalData= {modalData?.data}
                        />
                    </AnimatedContent>
                    )
                })}
               </AnimatePresence>
            </OpacityContent>
    )
}