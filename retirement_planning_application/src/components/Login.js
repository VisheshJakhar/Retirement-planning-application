import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Login = () => {

     const history = useNavigate();


    const[inpval,setInputval] = useState({
        email:"",
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
        const getuserArr = localStorage.getItem("useryoutube");//get data ffrom local storage
        //console.log(getuserArr);
        const{email,password}= inpval;
        if(email === ""){
            alert("Email field required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(password.length < 5){
            alert("Password length is less than 5")
        }else{
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);//converting from json fromat to array format
                const userlogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });

                if(userlogin.length === 0){
                    alert("Enter correct username & password")
                }
                else{
                    console.log("User login sucessful");
                    localStorage.setItem("user_login",JSON.stringify(userlogin))
                    history("/summary")
                }
                console.log(userlogin); 
            }
        }
    }
  return (
    <>
      <Header/>
      <div className="container mt-3">
           <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Login</h3>
                <Form>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={addData} className="col-lg-6">
        Submit
      </Button>
    </Form>
            </div>
            <Sign_img/>
           </section>
       </div>

    </>
  )
}

export default Login
