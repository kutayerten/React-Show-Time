import { useModals } from "~/stores/modal/hooks"
import { modals as modalRoutes} from "~/routes/modals"
import { modal } from "~/stores/modal/actions"

export default function Modals(){

    const modals= useModals()


    return(
        <div className="fixed inset-0 z-[9999] bg-zinc-700/40 backdrop-blur-sm flex items-center justify-center flex-wrap overflow-auto py-6 ">
            
                {modals.map(modalData => {
                    const current = modalRoutes.find( m => m.name === modalData.name )
                    return (
                    <div key={modalData.name} className="bg-white dark:bg-zinc-800 min-w-[400px] max-w-full grid rounded-md overflow-hidden shadow-lg border border-zinc-300 hidden last:block dark:text-white">
                        <current.element
                        key={modalData.name} 
                        destroy={modal.destroy} 
                        destroyAll={modal.destroyAll}
                        modalData= {modalData?.data}
                        />
                    </div>
                    )
                })}
            </div>
    )
}