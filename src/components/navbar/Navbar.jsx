import './navbar.css'
import  logo from '../../assets/logo2.png'
import {motion,useScroll,useTransform} from 'framer-motion'

function Navbar() {
    
const {scrollY}=useScroll()
const back_color=useTransform(scrollY,[50,150],['#4682A900','#4682A940'])
const border=useTransform(scrollY,[50,150],['2px solid #00000000','2px solid #00000030'])
  return (
    <motion.div style={{background:back_color,border:border}} className='navbar'>
<div className="l-navbar">
<img src={logo} alt="" />
Berkaoui <span>Mohamed</span>
</div>

    <ul className='r-navbar'>
    <a href="#home">
     <li>Home</li></a>
    <a href="#services"> <li>Services</li></a>
     <a href="#works"><li>Works</li></a>
     <a href="#contact"><button>
        contact
     </button></a>

    </ul>



    </motion.div>
  )
}

export default Navbar