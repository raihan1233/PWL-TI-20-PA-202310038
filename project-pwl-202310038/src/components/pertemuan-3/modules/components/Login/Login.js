import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function Login() {

  // const profile = {
  //   email: "",
  //   password: ""
  // }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const [direct, setDirect] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    if (email && password) {
      <Navigate to='/home' replace={true} />
      setDirect(true)
      setErrors("")
    }
    else if (!email || !password) {
      setErrors("Masukkan email dan password")
      setDirect(false)
    }
  }

  if (direct === true) {
    return <Navigate to='/home' replace={true} />
  }

  return (
    <form className="row g-3 container mx-auto mt-5 col-8 card" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <input 
            type="email" 
            className="form-control" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">Password</label>
        <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
      </div>
      <div className='badge bg-primary py-3 col-4 offset-4 text-center'>
        {errors}
      </div>
      <div className="col-12 mb-4">
        <button className="btn btn-primary" type="submit" >Submit form</button>
      </div>
    </form>
  )
}
