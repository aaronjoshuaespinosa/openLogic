import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="">
                <img src="https://ik.imagekit.io/xzgmktvzg/Open_Logic/whale.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431301657" alt="whale" className="" />
            </div>
            <div className="">
                <p>© Open Logic 2023</p>
                <div className="">
                    <p>FIND US HERE</p>
                    <BsTwitter />
                    <FaTelegramPlane />
                </div>
            </div>
        </footer>
    )
}

export default Footer