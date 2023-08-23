import  './services.css'
import Card from '../cards/Card'
import image from '../../assets/image.png'



function Services () {
  return (
    <div className='services_container'  id='services'>
      <div className="l_services">
<h1>My Services</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam, quidem optio beatae quod officiis non eius dignissimos numquam repellendus consequuntur fuga eveniet a suscipit, illum unde expedita? Eius, cumque?</p>
     <button>Download CV</button>
      </div>

      <div className="r_services">
        <div className='circle'></div>

<div className="card1 cards">
<Card  img={image} title={'disign'} disc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam,'}/>
     
</div>
<div className="card2 cards">
<Card  img={image} title={'disign'} disc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam,'}/>
     
</div>
<div className="card3 cards">
<Card  img={image} title={'disign'} disc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam,'}/>
     
</div>
      </div>

    </div>
  )
}

export default Services