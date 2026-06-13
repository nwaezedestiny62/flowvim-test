import { HeaderItem } from "@/type/menu";


export const headerData: HeaderItem[] = [
     { label: "Home", href: "/"},
     { 
        label: "Pages", 
        href: "#",
        submenu: [
            { label: "About Us", href: "/about"},
            { label: "Our CEO", href: "/founder"},
            { label: "Faq", href: "/faq"},
            { label: "About Us", href: "/contact"},
        ]
    },
    { 
        label: "Services", 
        href: "#",
        submenu: [
            { label: "Services List", href: "/services"},
            { label: "Services Details", href: "/services"},
        ]
    },
    { 
        label: "Portfolio", 
        href: "/portfolio",
        submenu: [
            { label: "Portfolio", href: "/portfolio"},
            { label: "Portfolio Details", href: "/portfolio"},
        ]
    },
    { 
        label: "Blog", 
        href: "/blog",
        submenu: [
            { label: "Blog", href: "/blog"},
            { label: "Blog Details", href: "/blog"},
        ]
    },
    { label: "Contact Us", href: "/contact" }
    
]
