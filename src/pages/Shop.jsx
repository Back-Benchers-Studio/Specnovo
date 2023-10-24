import {Swiper,SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { BrowserView, MobileView, isTablet, isMobile } from 'react-device-detect';
import 'swiper/css';
import {Link} from 'react-router-dom'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { motion } from "framer-motion";
import pc1 from '../assets/cases/case1.png'
import pc2 from '../assets/cases/case2.png'
import pc3 from '../assets/cases/case3.png'
import pc4 from '../assets/cases/case4.png'
import pc5 from '../assets/cases/case5.png'
import pc6 from '../assets/cases/case6.png'
import pc7 from '../assets/cases/case7.png'

import PreviewCard from "../components/PreviewCard"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const transition = { type: 'spring', duration: 2 ,delay:0.1}
function Shop(){

  const [deviceType, setDeviceType] = useState(
    isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'
  );

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';
      setDeviceType(newDeviceType);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const swiperConfig = {
    Mobile: {
      spaceBetween: 150,
      slidesPerView: 1,
    },
    Tablet: {
      spaceBetween: 120,
      slidesPerView: 2,
    },
    Desktop: {
      spaceBetween: 100,
      slidesPerView: 4,
    },
  };

  const { spaceBetween, slidesPerView } = swiperConfig[deviceType];

    return(
        <motion.div 
        initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 ,zIndex:2}} transition={transition}
        className="card-wrapper" >
          <span id="bolb1" className="bolb"></span>
          <span id="bolb2" className="bolb"></span>
        <Swiper
        modules={[Scrollbar]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        speed={600}
        breakpoints={{
          1024: {
            spaceBetween: 150, // Adjust these values as needed
            slidesPerView: 3,   // Adjust these values as needed
          },
          800:{
            spaceBetween: 50,
            slidesPerView: 2,
          }

        }}
        >
        <SwiperSlide>

          <PreviewCard
            stock={false}
            price={80}
            size={8}
            name={'MSI MAG VAMPIRIC 100R Midi Tower Case'}
            image={pc1}
          />

        </SwiperSlide>

        <SwiperSlide><PreviewCard stock fav={true} price={150} size={7} name={'NZXT H5 Flow RGB Black Midi Tower Behuizing'} image={pc2}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={false} price={150} size={7} name={'Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower'} image={pc3}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={true} price={200} size={12} name={'Antec NX 410 Midi Tower'} image={pc4}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={true} price={120} size={10} name={'Phanteks Eclipse G300A Black 3-fan Midi Tower Behuizing'} image={pc5}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={false} price={100} size={9} name={'DeepCool CC560 A-RGB Midi Tower'} image={pc6}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={false} price={300} size={6} name={'be quiet! Pure Base 500DX Black Midi Tower'} image={pc7}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={true} price={80} size={8} name={'MSI MAG VAMPIRIC 100R Midi Tower Case'} image={pc1}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={false} price={150} size={7} name={'NZXT H5 Flow RGB Black Midi Tower Behuizing'} image={pc2}/></SwiperSlide>
        <SwiperSlide><PreviewCard stock fav={true} price={150} size={7} name={'Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower'} image={pc3}/></SwiperSlide>
        </Swiper>

        
      </motion.div>
    )
}

export default Shop