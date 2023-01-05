import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import Surveyheader from './Surveyheader'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Survey = () => {

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
               <Surveyheader/>
          {
              logindata.length === 0 ? "Page not found" :
                  <>

                  <div style={{display:"flex",justifyContent:"right",marginRight:"3rem",marginTop:"0.75rem"}}><Button onClick={userlogout}>LogOut</Button></div>

                    <div className="container mt-3">
                       <section className="d-flex justify-content-between">
                        <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                            <h1 className='text-center col-lg-6' style={{justifyContent:"center",marginBottom:"5rem", marginLeft:"18vw"}}>Fill the form</h1>
                            <div style={{marginLeft:"2vw"}}>

                            <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>1.Gender</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>2.Age?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>3.Would you consider your annual retirement investment management to be active or passive?</h4></Form.Label>
                    <Form.Control type="text" name="" placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>4.What age do you plan to retire?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>5.Have you estimated how much saving you will need to retire considering your desired retirement age and life expectancy?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>6.What is the minimum retirement saving amount you will need to retire?</h4></Form.Label>
                    <Form.Control type="text" name="" placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>7.Anually, how much will you spend once you retire?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>8.Will you hire a professtional to plan your retirement?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>9.Will you provide support to children or parents when you retire?</h4></Form.Label>
                    <Form.Control type="text" name="" placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>10.When will your spouse retire?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>11.Do you need assistance from us for your retirement planning?</h4></Form.Label>
                    <Form.Control type="text" name='' placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Button variant="primary" type="submit" className="col-lg-6">
                    Submit
                  </Button>
                </Form>

                            </div>
                        </div>
                       </section>
                   </div>
                </>
                }
   </>
  )
}
export default Survey
