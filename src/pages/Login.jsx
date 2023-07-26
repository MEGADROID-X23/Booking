import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login(){

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/login/", data)
    .then((response) =>{
      if(response.data === "Invalid email"){
        alert("invalid email")

      }else if(response.data === "Invalid credentials"){
        alert("invalid credentials");

    }else{
      let data = response.data
      localStorage.setItem('info', JSON.stringify(data))

      navigate("/home")

    }
  })
  .catch((error) => console.log(error))
}

  return (
    <div className='login w-50 position-absolute top-50 start-50 translate-middle'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input type="email" class="form-control" name="email" id="" aria-describedby="emailHelpId" required placeholder="enter your email"/>
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" id="" aria-describedby="emailHelpId" required placeholder="input your password"/>
            </div>
            <button type='submit' className='btn btn-primary w-100 btn-md mt-3'>Login</button>
        </form>
    </div>
  )
  }

export default Login