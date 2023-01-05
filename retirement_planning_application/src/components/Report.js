import React, { useEffect, useState } from 'react'
import Reportheader from './Reportheader'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const Report = () => {
    const [logindata, setLoginData] = useState([]);
    const history = useNavigate();

  const Name = () => {
      const getuser = localStorage.getItem("formdata");
      if (getuser && getuser.length) {
          const user = JSON.parse(getuser);
          setLoginData(user);
      }
  }

  const userlogout = ()=>{
      localStorage.removeItem("user_login")
      history("/");
  }

  const surveypage = ()=>{
    history("/survey");
}

  useEffect(() => {
      Name();
  }, [])
  return (
    <>
      <Reportheader/>
      {
        logindata.length === 0 ? "Page not found" :
        <>
        <div style={{display:"flex",justifyContent:"right",marginRight:"3rem",marginTop:"0.75rem"}}><Button onClick={userlogout}>LogOut</Button></div>
                      <div style={{paddingLeft:"2rem"}}>

                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>1.Gender:- {logindata[0].q1}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>2.Age:- {logindata[0].q2}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>3.Retirement investment:- {logindata[0].q3}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>4.Prefered age of retirement:- {logindata[0].q4}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>5.Estimated savings needed for retirement:- {logindata[0].q5}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>6.Minimum retirement saving amount:- {logindata[0].q6}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>7.Annual spending after retirement:- {logindata[0].q7}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>8.Professional needed for retirement planning:- {logindata[0].q8}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>9.Will provide support to children or parents:- {logindata[0].q9}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>10.Spouse will retire till:- {logindata[0].q10}</h4>
                      <h4 className='welcome col-lg-6' style={{marginBottom:"2rem"}}>11.Need assistance from us:- {logindata[0].q11}</h4>

                      </div>
        </>
      }
    </>
  )
}
export default Report
