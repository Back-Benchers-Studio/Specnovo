import { useEffect, useState } from "react"
import{motion} from 'framer-motion'
function PreviewCard({image,name,size,price,stock}){
    return(
        <div className={`card`}>
            <h1 style={{fontSize:size}}>{name}</h1>
            <img src={image} alt="" />
            <p className="backname">PC</p>
            <div className="price-add">
                <div className="price">
                    <span>price</span>
                    <p>{price}$</p>
                </div>
                <button>+</button>
            </div>
            <div style={{position:'absolute',bottom:"2%",left:'10%'}}>{stock?'in stock':'out of stock'}</div>
        </div>
    )
}

export default PreviewCard