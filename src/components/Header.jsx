import { motion } from "framer-motion";
const transition = { type: 'spring', duration: 0.8 }
import { Link } from "react-router-dom";
function Header(){
    return (
      <>
      <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 ,zIndex:2}} transition={transition}>
        <img src='logo.png' width="40" height="40" />
        <div className="logo-container">
          <a href="#" className="logo-text">
            {/* PC Builder */}
          </a>
        </div>
        <div className="top-right-links" style={{zIndex:2}}>
          <Link to={'/shop'} href="#" className="link">
            PCs
          </Link>
          <Link href="#" className="link">
            Delivery
          </Link>
          <Link href="#" className="link">
            Contact
          </Link>
          <Link to={'/shop'} href="#" className="cart-icon" style={{textDecoration:'none'}}>
            🛒
          </Link>
        </div>
        </motion.header>
      </>
    );
}

export default Header