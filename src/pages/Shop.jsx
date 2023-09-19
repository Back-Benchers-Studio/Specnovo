import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { motion } from "framer-motion";
import pc1 from "../assets/cases/case1.png";
import pc2 from "../assets/cases/case2.png";
import pc3 from "../assets/cases/case3.png";
import pc4 from "../assets/cases/case4.png";
import pc5 from "../assets/cases/case5.png";
import pc6 from "../assets/cases/case6.png";
import pc7 from "../assets/cases/case7.png";

import PreviewCard from "../components/PreviewCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const transition = { type: "spring", duration: 2, delay: 0.1 };
function Shop() {
  const [mobile, setMobile] = useState(isMobile);
  useEffect(() => {
    document.addEventListener("resize", () => {
      setMobile(isMobile);
    });
  });
  console.log("State to be sent:", {
    price: 80,
    name: "MSI MAG VAMPIRIC 100R Midi Tower Case",
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, zIndex: 2 }}
      transition={transition}
      className="card-wrapper"
    >
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={100}
        slidesPerView={mobile ? 1 : 4}
        loop={true} 
        speed={600}
      >
        <SwiperSlide>
          <Link
            to={{
              pathname: "/config",
              state: {
                price: 80,
                name: "MSI MAG VAMPIRIC 100R Midi Tower Case",
              },
            }}
          >
            <PreviewCard
              stock={false}
              price={80}
              size={8}
              name={"MSI MAG VAMPIRIC 100R Midi Tower Case"}
              image={pc1}
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 150,
                name: "NZXT H5 Flow RGB Black Midi Tower Behuizing",
              },
            }}
          >
          <PreviewCard
            stock
            price={150}
            size={7}
            name={"NZXT H5 Flow RGB Black Midi Tower Behuizing"}
            image={pc2}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 150,
                name: "Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower",
              },
            }}
          >
          <PreviewCard
            stock
            price={150}
            size={6.5}
            name={"Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower"}
            image={pc3}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 200,
                name: "Antec NX 410 Midi Tower",
              },
            }}
          >
          <PreviewCard
            stock
            price={200}
            size={12}
            name={"Antec NX 410 Midi Tower"}
            image={pc4}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 120,
                name: "Phanteks Eclipse G300A Black 3-fan Midi Tower Behuizing",
              },
            }}
          >
          <PreviewCard
            stock
            price={120}
            size={10}
            name={"Phanteks Eclipse G300A Black 3-fan Midi Tower Behuizing"}
            image={pc5}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 100,
                name: "DeepCool CC560 A-RGB Midi Tower",
              },
            }}
          >
          <PreviewCard
            stock
            price={100}
            size={9}
            name={"DeepCool CC560 A-RGB Midi Tower"}
            image={pc6}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 300,
                name: "be quiet! Pure Base 500DX Black Midi Tower",
              },
            }}
          >
          <PreviewCard
            stock
            price={300}
            size={6}
            name={"be quiet! Pure Base 500DX Black Midi Tower"}
            image={pc7}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 80,
                name: "MSI MAG VAMPIRIC 100R Midi Tower Case",
              },
            }}
          >
          <PreviewCard
            stock
            price={80}
            size={8}
            name={"MSI MAG VAMPIRIC 100R Midi Tower Case"}
            image={pc1}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 150,
                name: "NZXT H5 Flow RGB Black Midi Tower Behuizing",
              },
            }}
          >
          <PreviewCard
            stock
            price={150}
            size={7}
            name={"NZXT H5 Flow RGB Black Midi Tower Behuizing"}
            image={pc2}
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
            to={{
              pathname: "/config",
              state: {
                price: 150,
                name: "Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower",
              },
            }}
          >
          <PreviewCard
            stock
            price={150}
            size={6.5}
            name={"Fractal Design Pop Air RGB Black TG Clear Tint Midi Tower"}
            image={pc3}
          />
          </Link>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
  
}

export default Shop;
