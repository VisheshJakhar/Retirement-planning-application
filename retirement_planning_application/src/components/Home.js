import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import Header from './Header'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate();

    const[inpval,setInputval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })
    const [data,setData] = useState([]);
    console.log(inpval);
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
        const{name,email,date,password}= inpval;
        if(name === ""){
            alert("Name field is required");
        }else if(email === ""){
            alert("Email field required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(date === ""){
            alert("Date field is required")
        }else if(password.length < 5){
            alert("Password length is less than 5")
        }else{
            console.log("Data added sucessfully");
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
            history("/login")
        }
    }
  return (
    <>
    <Header/>
       <div className="container mt-3">
           <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Sign Up</h3>
                <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
        
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="date" name='date' onChange={getdata}/>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={addData} className="col-lg-6">
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
            </div>
            <Sign_img/>
           </section>
       </div>
    </>
  )
}

export default Home
