import { ReactNode } from "react";

interface MenuItemProps {
    href?: string
    children: ReactNode
}


const MenuItem: React.FC<MenuItemProps> = ({href="#", children }) => {
  return (
    <li className="p-2">
        <a href="#" className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
            {children}
        </a>
    </li>
  )
}

export { MenuItem }