import React from 'react'
import axios from 'axios'

function Signup(){

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    axios.post('http://localhost:8000/signup/', data)
    .then((response) => {
      if(response.data === 'signup successful'){
        alert('account created');

      }else{
        let error = response.data

        for(let key in error){
          alert(key + "" + error[key]);
        }
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='login w-50 position-absolute top-50 start-50 translate-middle'>
        <form className='container' onSubmit={(e) => handleSubmit(e)}>
            <div class="mb-3">
              <label for="" class="form-label">First Name</label>
              <input type="text" class="form-control" name="first_name" id="" aria-describedby="emailHelpId" required placeholder="enter your first name"/>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Last Name</label>
              <input type="text" class="form-control" name="last_name" id="" aria-describedby="emailHelpId" required placeholder="enter your last name"/>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input type="email" class="form-control" name="email" id="" aria-describedby="emailHelpId" required placeholder="enter your email"/>
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" id="" aria-describedby="emailHelpId" required placeholder="input your password"/>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Photo</label>
              <input type="file" class="form-control" name="photo" id="" aria-describedby="emailHelpId" required placeholder="input your password"/>
            </div>
            <button type='submit' className='btn btn-primary w-100 btn-md mt-3'>Submit</button>
        </form>
    </div>
  )
}

export default Signup