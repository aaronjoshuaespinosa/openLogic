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
        img: "https://ik.imagekit.io/xzgmktvzg/Open_Logic/DEXTOOLS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431238027",
    },
    { 
        name: "COIN MARKET CAP",
        img: "https://ik.imagekit.io/xzgmktvzg/Open_Logic/CMC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431241254",
    },
    { 
        name: "COIN GECKO",
        img: "https://ik.imagekit.io/xzgmktvzg/Open_Logic/CG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431240252",
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
        img: "https://ik.imagekit.io/xzgmktvzg/Open_Logic/CG_CMC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431240286"
    },
    {
        name: "DEXTOOLS TRENDING",
        desc: "I can trend any project based on the spot you want on dextools.",
        img: "https://ik.imagekit.io/xzgmktvzg/Open_Logic/DEXTOOLS_WHITE_BG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431250790"
    },
]