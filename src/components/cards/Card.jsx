import  './card.css'

function Card(props) {
  return (
    <div className='card'>
<img src={props.img} alt="" />

<div className="b_card">

    <h3> {props.title}</h3>
    <p>
        {props.disc}
    </p>
    <button>
        {props.title}
    </button>
</div>



    </div>
  )
}

export default Card