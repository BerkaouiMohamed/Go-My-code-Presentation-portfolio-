import "./contact.css";
import locationimg from "../../assets/location.png";
import phoneImg from "../../assets/phone.png";
import emailImg from "../../assets/email.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
 /* const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); }

    const hundleSubmit = (e) => {
      e.preventDefault();
    };*/
    const hundleSubmit = (e) => {
     e.prentDefault()
  
      emailjs.sendForm('service_pqjwmun', 'template_s0cbjhr', form.current, 'P7h1ZXeQsucz7f157')
        .then((result) => {
            console.log(result.text);
            form.current=""
         
        }, (error) => {
            console.log(error.text);
        });
    };

    const form = useRef();
 ;
  return (
    <div className="contact">
      <div className="c-right">
        <div className="contacticons">
          <img src={locationimg} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            quaerat.
          </span>
        </div>
        <div className="contacticons">
          <img src={phoneImg} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            quaerat.
          </span>
        </div>
        <div className="contacticons">
          <img src={emailImg} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            quaerat.
          </span>
        </div>
      </div>

      <div className="c-form">
        <form ref={form} onSubmit={hundleSubmit}>

          <label>name</label>
          <input
            type="text"
            name="name"
            required
          />
          <label >email</label>
          <input
            type="email"
            name="email"
           
            placeholder="email"
            required
          />
<label>message</label>
          <textarea
            name="message"
         
            rows={4}
            required
          />
          <button><input type="submit" value="" style={{opacity:0}}/> </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
