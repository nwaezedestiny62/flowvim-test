"use client"

import { HeaderItem } from "@/type/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const path = usePathname();

    const handleMouseEnter = () => {
        if (item.submenu) {
            setSubmenuOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };

    return (
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
                href={item.href}
                className={`flex items-center text-base font-normal hover:text-shadow-dark-text 
                    ${path === item.href ? "text-white hover:text-white" : "text-white"}`}
            >
                {item.label}
                {item.submenu && (
                    <Icon
                        icon="iconamoon:arrow-down-2-duotone"
                        width="22"
                        height="22"
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                    />
                )}
            </Link>

            {item.submenu && (
                <div className={`absolute left-0 top-10 rounded-lg mt-1 w-60 bg-white shadow-lg overflow-hidden 
                    opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible 
                    transition-all duration-300`}>
                    {item.submenu.map((subItem: any, index: number) => (
                        <Link
                            key={index}
                            href={subItem.href}
                            className={`block px-4 py-2 transition 
                                ${path === subItem.href ? "text-white bg-dark" : "text-midnight_text hover:bg-dark hover:text-white"}`}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderLink;