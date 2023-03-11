import { FaEthereum, FaTelegramPlane } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const navlinks = [
    {
        link: "#about",
        name: "ABOUT US"
    },
    {
        link: "#services",
        name: "WHY OPEN LOGIC"
    },
    {
        link: "#partners",
        name: "OUR SERVICES"
    },
]
export const heroPartners = [
    { 
        name: "TWITTER",
        img: <BsTwitter/>,
        color: "#00acee",
    },
    { 
        name: "TELEGRAM",
        img: <FaTelegramPlane/>,
        color: "#229ED9",
    },
    { 
        name: "CALL CHANNEL",
        img: <BsTelegram/>,
        color: "#229ED9",
    },
    { 
        name: "EMAIL",
        img: <MdEmail/>,
        color: "#ffffff",
    },
]

export const services = [
    {
        label: "Liquidity Provider",
        desc: "Do you have an idea for a promising ventures that require liquidity for there project?  Please feel free to present your proposals, as we are willing to serve as a liquidity provider for your upcoming token.",
        icon: <FaEthereum />
    },
    {
        label: "Consulting For Projects",
        desc: "We can provide consultation for your new tokens and demonstrate similar strategies that have been used in the passed with great success to ensure that every launch achieves at least a 500k market capitalization.",
        icon: <GiTeacher />
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
        name: "Website Development",
        desc: "We will create a top-notch crypto webpage for your upcoming token that is of superior quality.",
        img: "/web.webp"
    },
    {
        name: "DEXTOOLS TRENDING",
        desc: "I can trend any project based on the spot you want on dextools.",
        img: "/dextools-white.webp"
    },
]