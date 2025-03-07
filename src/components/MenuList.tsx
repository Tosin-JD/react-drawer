import { ReactNode } from "react";


interface MenuListProps {
    children: ReactNode
}

const MenuList: React.FC<MenuListProps> = ({ children }) => {
    return (
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export { MenuList }
