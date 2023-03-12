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
]
export const heroPartners = [
    {
        name: "TWITTER",
        img: <BsTwitter />,
        color: "#00acee",
    },
    {
        name: "TELEGRAM",
        img: <FaTelegramPlane />,
        color: "#229ED9",
    },
    {
        name: "CALL CHANNEL",
        img: <BsTelegram />,
        color: "#229ED9",
    },
    {
        name: "EMAIL",
        img: <MdEmail />,
        color: "#ffffff",
    },
]

export const services = [
    {
        label: "Liquidity Provider",
        desc: "Do you have an idea for a promising ventures that require liquidity for there project?  Please feel free to present your proposals, as we are willing to serve as a liquidity provider for your upcoming token.",
        icon: <FaEthereum />,
        price: "Contact Now",
    },
    {
        label: "Consulting For Projects",
        desc: "We can provide consultation for your new tokens and demonstrate similar strategies that have been used in the passed with great success to ensure that every launch achieves at least a 500k market capitalization.",
        icon: <GiTeacher />,
        price: "Contact Now",
    },
    {
        label: "Development For Projects",
        desc: "We'll take care of the deployment and management of everything on the development side for your project, and also provide some minor consulting.",
        icon: <AiFillProject />,
        price: "Contact Now",
    },
]

export const partners = [
    {
        name: "CMC AND CG",
        desc: "We can fast-track coinmarketcap and coingecko listings, will need to check if project meets requirement before payment.",
        img: "/cg_cmc.webp",
        price: "Contact Now",
    },
    {
        name: "Website Development",
        desc: "We will create a top-notch crypto webpage for your upcoming token that is of superior quality.",
        img: "/web.webp",
        price: "Contact Now",
    },
    {
        name: "DEXTOOLS TRENDING",
        desc: "We can trend any project based on the spot you want on dextools.",
        img: "/dextools-white.webp",
        price: "Contact Now",
    },
]