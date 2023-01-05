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

const[inpval,setInputval] = useState({
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:"",
        q6:"",
        q7:"",
        q8:"",
        q9:"",
        q10:"",
        q11:""
    })

      const [data,setData] = useState([]);

    const getdata = (e)=>{
           //console.log(e.target.value);
           const{value,name}=e.target;//It is object dectructuring.It is equal to const value = e.target.value and const name = e.target.name
           //console.log(value,name);

           setInputval(()=>{//sets the input values
            return{
                ...inpval,
                [name]:value
            }
           })
    }

    const addData = (e)=>{
        e.preventDefault();//preventong default behaveiour of button
        //console.log(inpval);
        const{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}= inpval;
        if(q1 === ""){
            alert("Question 1 field is required");
        }else if(q2 === ""){
            alert("Question 2 field required")
        }else if(q3 === ""){
            alert("Question 3 field required")
        }else if(q4 === ""){
            alert("Question 4 field required")
        }else if(q5 === ""){
            alert("Question 5 field required")
        }else if(q6 === ""){
            alert("Question 6 field required")
        }else if(q7 === ""){
            alert("Question 7 field required")
        }else if(q8 === ""){
            alert("Question 8 field required")
        }else if(q9 === ""){
            alert("Question 9 field required")
        }else if(q10 === ""){
            alert("Question 10 field required")
        }else if(q11 === ""){
            alert("Question 11 field required")
        }else{
            console.log("Data added sucessfully");
            localStorage.setItem("formdata",JSON.stringify([...data,inpval]));
            history("/report")
        }
    }
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
                    <Form.Control type="text" name='q1' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>2.Age?</h4></Form.Label>
                    <Form.Control type="text" name='q2' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>3.Would you consider your annual retirement investment management to be active or passive?</h4></Form.Label>
                    <Form.Control type="text" name="q3" onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>4.What age do you plan to retire?</h4></Form.Label>
                    <Form.Control type="text" name='q4' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>5.Have you estimated how much saving you will need to retire considering your desired retirement age and life expectancy?</h4></Form.Label>
                    <Form.Control type="text" name='q5' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>6.What is the minimum retirement saving amount you will need to retire?</h4></Form.Label>
                    <Form.Control type="text" name="q6" onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>7.Anually, how much will you spend once you retire?</h4></Form.Label>
                    <Form.Control type="text" name='q7' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>8.Will you hire a professtional to plan your retirement?</h4></Form.Label>
                    <Form.Control type="text" name='q8' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>9.Will you provide support to children or parents when you retire?</h4></Form.Label>
                    <Form.Control type="text" name="q9" onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>10.When will your spouse retire?</h4></Form.Label>
                    <Form.Control type="text" name='q10' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingBottom:"2rem"}}>
                  <Form.Label><h4>11.Do you need assistance from us for your retirement planning?</h4></Form.Label>
                    <Form.Control type="text" name='q11' onChange={getdata} placeholder="Enter details" style={{width:"35vw"}}/>

                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={addData} className="col-lg-6">
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
