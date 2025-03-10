import {ReactNode} from 'react'


type DrawerPosition = 'bottom' | 'top' | 'left' | 'right'

interface DrawerProps {
  drawerIsOpen: boolean
  onClose: () => void
  title?: string
  position?: DrawerPosition
  children: ReactNode
}


// the drawer component so that it is reusable
const Drawer: React.FC<DrawerProps> = ({ 
    drawerIsOpen,
    onClose, 
    title="Menu", 
    position="bottom", 
    children
}) => {

    // classes for the positions
    const positionClasses: Record<DrawerPosition, string> = {
        'bottom': 'inset-x-0 bottom-0 flex flex-col pb-20',
        'top': 'top-0 left-0 w-full h-full flex flex-col-reverse pb-5',
        'left': 'inset-y-0 left-0 h-full w-full',
        'right': 'inset-y-0 right-0 w-full',
    }

    const transformClasses: Record<DrawerPosition, string> = {
        'bottom': drawerIsOpen? 'translate-y-0': 'translate-y-full',
        'top': drawerIsOpen? 'translate-y-0': '-translate-y-full',
        'left': drawerIsOpen? 'translate-x-0' : '-translate-x-full',
        'right': drawerIsOpen? 'translate-x-0': 'translate-x-full'
    }

    const sizeClasses: Record<DrawerPosition, string> = {
        'bottom': 'max-h-80vh',
        'top': 'max-h-80vh',
        'left': 'max-w-80vw',
        'right': 'max-w-80vw'
    }

    const handlePositionClasses: Record<DrawerPosition, string> = {
        // 'bottom': 'flex justify-center mb-2',
        bottom: "w-12 h-1.5",
        top: "w-12 h-1.5",
        left: "h-12 w-1.5",
        right: "h-12 w-1.5"
    }

    const isVertical = position === 'top' || position === 'bottom';

    return (
        <>
            {/* this is the Backdrop overlay */}
            {drawerIsOpen && (
                <div
                    className="fixed inset-0 bg-gray-100 backdrop-blur-sm bg-opacity-50 z-20">
                </div>
            )}

            <div
                className={`fixed 
                    ${positionClasses[position]}
                    ${transformClasses[position]}
                    ${sizeClasses[position]}
                    transition-all
                    transform px-2 mx-2  backdrop-blur-sm
                    border border-gray/20 bg-opacity-75                    
                    bg-gray-200 shadow-lg z-30 transition duration-300 ease-in-out
                    bg-gradient-to-b from-white to-gray-200/10
                    shadow-lg rounded-t-xl max-h-80vh`}
            >
                <div onClick={onClose} className='p-6'>
                    <div className={`flex ${isVertical ? 'justify-center': 'opacity-0 items-center h-full'}`}>
                        <div className={`${handlePositionClasses[position]} bg-gray-400 rounded-full`}></div>
                    </div>
                </div>

                {/* items inside the drawer */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 focus:outline-none">{title}</h2>
                        <div
                            onClick={onClose}
                            className="text-gray-700 hover:text-gray-900 focust:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>    
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>  
                    </div> 
                        {/* the children inside the drawer */}
                    <div className="px-4 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Drawer }
export type { DrawerPosition }