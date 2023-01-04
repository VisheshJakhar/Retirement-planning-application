import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Summaryheader from './Summaryheader'
import { useNavigate } from 'react-router-dom'

const Summary = () => {

  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const Name = () => {
      const getuser = localStorage.getItem("user_login");
      if (getuser && getuser.length) {
          const user = JSON.parse(getuser);
          setLoginData(user);
      }
  }

  const userlogout = ()=>{
      localStorage.removeItem("user_login")
      history("/");
  }

  useEffect(() => {
      Name();
  }, [])

  return (
      <>
      <Summaryheader/>
          {
              logindata.length === 0 ? "Page not found" :
                  <>
                      <div style={{display:"flex",justifyContent:"right",marginRight:"3rem",marginTop:"0.75rem"}}><Button onClick={userlogout}>LogOut</Button></div>
                      <h1 className='welcome col-lg-6'>Welcome {logindata[0].name}</h1>
                  </>
          }
      </>
  )
}

export default Summary