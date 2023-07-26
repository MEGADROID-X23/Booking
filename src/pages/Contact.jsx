import React, {Component} from 'react'

export class Contact extends Component{


render() {
  const handleSubmit = (e) => {

    e.preventDefault()
    const data = new FormData(e.currentTarget)

    console.log(data.get('name'))
    console.log(data.get('email'))
    console.log(data.get('message'))
  }

  return (
    <>
    <div className='d-block m-auto bg-primary' id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Contact Me</h1>
                <p className='p1'><i className="fas fa-paper-plane"></i>omegadroid4@gmail.com</p>
                <p className='p1'> <i className="fas fa-phone-square-alt"></i> 09033238211</p>
                <a href="" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="name" placeholder="Your Name Please" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn btn2">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div className="copyright">
        <p>Copyright ©  Tochi 'MEGADROID' Nwadibia</p>
    </div>
</div>
  </>
  )
  }
}

export default Contact