import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import {AiOutlinePlus,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

function PreviewCard({ image, name, size, price, stock, fav }) {

  const [mobile,setMobile] = useState(isMobile)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setMobile(isMobile)
    })
    
  },)
  return (
    <div className={`card`}>
      <img src={image} alt="" />
        {/* <p>. . .</p> */}
      <div className="price-add">
        <div className="price">
          <h1>{name}</h1>
          <p>{price}$</p>
        </div>
        <div className="controler-btns">
          <button><AiOutlinePlus/></button>
          <button style={{color: fav? "#ff534d" : ""}}>{fav?<AiFillHeart/> : <AiOutlineHeart/>}</button>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
