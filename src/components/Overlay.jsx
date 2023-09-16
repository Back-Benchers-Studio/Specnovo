// import { Logo } from '@pmndrs/branding'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCamera, AiOutlineArrowLeft, AiOutlineHighlight, AiOutlineShopping} from 'react-icons/ai'
import { BiShoppingBag} from 'react-icons/bi'
import { HiPuzzlePiece as EditIcon } from 'react-icons/hi2'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
export function Overlay() {
  const snap = useSnapshot(state)
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  let [fill ,setFill] = useState(false)
  useEffect(()=>{
      if(window.location.pathname === '/')
      {
      state.inConfigMode = false
      state.intro = true
    }
    setTimeout(() => {
      if(state.intro){
        setFill(true)
      }
    }, 500);
  })
  let style = `
  .strokeme1 {
       background: radial-gradient(${state.color},#000000) left no-repeat, #d1d2de00 ; 
       filter: brightness(0.4)
    }
  `
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <span className='prod strokeme2 fill-text'>BACK BENCHERS PRODUCT</span>
      <AnimatePresence>
        {snap.intro ? (
          <motion.section key="main" {...config}>
            <div className="section--container">
              <motion.div
                key="title"
                initial={{ x: 100,y:10, opacity: 0 }}
                animate={{ x: -40,y:40, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 0.3 }}>
                <h1 className={`strokeme1 ${fill?'strokeme1-active':''}`}>MAKE YOUR OWN DREAM PC!</h1>
              </motion.div>
              <style>{style}</style>
              <div className="support--content">
                <motion.div
                  key="p"
                  initial={{ y: 130, x:80, opacity: 0 }}
                  animate={{ y: 90,x:80, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.6,
                    delay: 0.2,
                    delayChildren: 0.2
                  }}>
                  <p>
                    Add your own parts and create yout own pc <strong>Unleash your imagination</strong> and define your
                    own style.
                  </p>
                  <div style={{textDecoration:'none',display:'flex',flexDirection:"row",gap:'10px'}}>
                  <Link style={{textDecoration:'none'}} to={'/shop'}>
                    <button  style={{ filter: `brightness(0.85)`,background: snap.color,fontSize:'20px !important' }}>
                      SHOP<BiShoppingBag size="1em" />
                    </button>
                  </Link>
                  <Link style={{textDecoration:'none'}} to={'/config'}>
                  <button onClick={()=>state.inShopMode = true} style={{ filter: `brightness(0.85)`,background: snap.color,fontSize:'20px !important' }}>
                      CONFIGURATOR <EditIcon size="1em" />
                    </button>
                  </Link>
                    </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function Customizer() {
  const snap = useSnapshot(state)
  return (
    <div className="customizer">
      <div className="color-options">
        {snap.colors.map((color) => (
          <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
        ))}
      </div>
      <div className="decals">
        <div className="decals--container">
            <div style={{width:'100%',bottom:'0px'}} className={`decal`}>
              {/* <img style={{width:'50% '}} src={'logo.png'} alt="brand" /> */}
            </div>
        </div>
      </div>
      {/* <button
        className="share"
        style={{ background: snap.color }}
        onClick={() => {
          const link = document.createElement('a')
          link.setAttribute('download', 'canvas.png')
          link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
          link.click()
        }}>
        DOWNLOAD
        <AiFillCamera size="1.3em" />
      </button> */}
      <button className="exit" style={{ background: snap.color }} onClick={() => (state.intro = true)}>
        GO BACK
        <AiOutlineArrowLeft size="1.3em" />
      </button>
    </div>
  )
}
