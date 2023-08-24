import './home.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import myimg  from '../../assets/monimage.png'
import Blur from '../blureffect/Blur'



import {motion} from 'framer-motion'



function Home() {
  return (
<div className="home" id='#home'>
  <Blur/>
<div className="h-left">
<motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y: 0}} tra style={{transition:'all 0.5s ease '}}>Hello I Am </motion.h1>
<motion.h2 initial={{opacity:0,x:50}} whileInView={{opacity:1,x: 0}} style={{transition:'all 0.3s ease '}}>Mohamed</motion.h2>
<motion.p initial={{opacity:0}} transition={{delay:0.5 ,duration:0.5 ,ease:'easeIn'}} whileInView={{opacity:1}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam. Doloremque, voluptate minima veniam beatae ipsam odit nisi repellat nihil fugit esse reiciendis officiis cupiditate, atque at repellendus error unde?</motion.p>
<button> Lets work Toogether</button>
<div className="h-icons">
    <img src={facebook} alt="" />
    <img src={instagram} alt="" />
    <img src={linkedin} alt="" />
</div>
</div>
<motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x: 0}} transition={{delay:0.5 ,duration:0.5 ,ease:'easeIn'}}  className="h-right">
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#E24B64" d="M58.4,-13.7C65.8,3.7,55,32.3,33.8,48.1C12.6,63.8,-19,66.8,-40.3,52.1C-61.6,37.4,-72.5,5.2,-64,-13.7C-55.6,-32.5,-27.8,-38,-1.1,-37.6C25.5,-37.2,51.1,-31.1,58.4,-13.7Z" transform="translate(100 100)" />
</svg>

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#4682A9" d="M42.8,-33.8C52.9,-21.4,56.8,-3.8,52.3,10.4C47.8,24.5,34.9,35.1,19.3,44.4C3.6,53.6,-14.9,61.5,-34,57.3C-53.1,53.2,-72.9,37.2,-71.4,22.4C-70,7.6,-47.3,-6,-31.8,-19.6C-16.4,-33.3,-8.2,-46.9,4.1,-50.2C16.3,-53.4,32.6,-46.2,42.8,-33.8Z" transform="translate(100 100)" />
</svg>

<img src={myimg} alt="" />

</motion.div>


</div>  )
}

export default Home