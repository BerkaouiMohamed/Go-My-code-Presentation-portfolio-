import  './works.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import left from '../../assets/left.png'
import right from '../../assets/right.png'


import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import project4 from "../../assets/project4.jpg"
import project5 from "../../assets/project5.jpg"
import project6 from "../../assets/project6.jpg"
import project7 from "../../assets/project6.jpg"
import Blur from '../blureffect/Blur';



function Works() {
  return (
    <div className='works'>
      <Blur/>
<h1>My Projects</h1>
<div className="w-slider">

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={project1} alt="slide_image" />
    <button>giiiC</button>

        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="slide_image" />
    <button>giiiC</button>

        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="slide_image" />
          <button>giiiC</button>

        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
<img src={left} alt="" />          </div>
          <div className="swiper-button-next slider-arrow">
          <img src={right} alt="" />  </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
</div>
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias mollitia enim quo voluptatem natus illo saepe repellat vero dicta sed architecto numquam, rem perspiciatis id obcaecati veritatis unde? Repellendus?</span>


    </div>
  )
}

export default Works