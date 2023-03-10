import { FaBitcoin, FaQuestionCircle } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

export const navlinks = [
    {
        link: "#about",
        name: "ABOUT US"
    },
    {
        link: "#services",
        name: "SERVICES"
    },
    {
        link: "#partners",
        name: "OUR PARTNERS"
    },
]
export const heroPartners = [
    { 
        name: "DEXTOOLS",
        img: "/dextools.webp",
    },
    { 
        name: "COIN MARKET CAP",
        img: "/cmc.webp",
    },
    { 
        name: "COIN GECKO",
        img: "/cg.webp",
    },
]

export const services = [
    {
        label: "Liquidity Provider",
        desc: "Promising ventures that require liquidity for there projects. Please feel free to present your proposals, as I am willing to serve as a liquidity provider for your upcoming token.",
        icon: <FaBitcoin />
    },
    {
        label: "Consulting For Projects",
        desc: "I'll provide consultation for your new token and demonstrate similar strategies that I use to ensure that every launch achieves at least a 500k market capitalization.",
        icon: <FaQuestionCircle />
    },
    {
        label: "Development For Projects",
        desc: "I'll take care of the deployment and management of everything on the development side for your project, and also provide some minor consulting.",
        icon: <AiFillProject />
    },
]

export const partners = [
    {
        name: "CMC AND CG",
        desc: "I can fast-track coinmarketcap and coingecko listings, will need to check if project meets requirement before payment.",
        img: "/cg_cmc.webp"
    },
    {
        name: "DEXTOOLS TRENDING",
        desc: "I can trend any project based on the spot you want on dextools.",
        img: "/dextools-white.webp"
    },
]