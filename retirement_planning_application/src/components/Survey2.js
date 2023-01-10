import React, {useState, useEffect} from "react";
import Surveyheader from './Surveyheader'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const Survey2 = () => {
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

    const initialRetirementAge = Number(localStorage.getItem("retirementAge") || 100);
    const initialTargeRetAmt = Number(localStorage.getItem("targetRetAmt") || 0);
    const initialAnnualRetExp = Number(localStorage.getItem("annualRetExp") || 0);
    const initialCurrentAge = Number(localStorage.getItem("currentAge") || 35);
    const initialCurrentSavings = Number(localStorage.getItem("currentSavings") || 10000);
    const initialContributions = Number(localStorage.getItem("contributions") || 500);
    const initialContributionFreq = Number(localStorage.getItem("contributionFreq") || "Monthly");
    const initialPreRetROR = Number(localStorage.getItem("preRetROR") || 7);
    const initialPostRetROR = Number(localStorage.getItem("postRetROR") || 7);
    const initialInflation = Number(localStorage.getItem("inflation") || 2.9);
  
     const[retirementAge, setRetirementAge] = useState(initialRetirementAge);
     const[targetRetAmt, setTargetRetAmt] = useState(initialTargeRetAmt);
     const[annualRetExp, setAnnualRetExp] = useState(initialAnnualRetExp);
     const[currentAge, setCurrentAge] = useState(initialCurrentAge);
     const[currentSavings, setCurrentSavings] = useState(initialCurrentSavings);
     const[contributions, setContributions] = useState(initialContributions);
     const[contributionFreq, setContributionFreq] = useState(initialContributionFreq);
     const[preRetROR, setPreRetROR] = useState(initialPreRetROR);
     const[postRetROR, setPostRetROR] = useState(initialPostRetROR);
     const[inflation, setInflation] = useState(initialInflation);
  
      const formatter = new Intl.NumberFormat("en-US",{style: "currency", currency:"INR", minimumFractionDigits: 2});
      
       const calcRetirementAge = (updatedTargetRetAmt => {
         const netPreRetROR = (preRetROR - inflation)/100;
         let currBal = currentSavings;
         const annualCont = contributionFreq === "Anually" ? contributions : contributions*12;
         let retAge = currentAge;
        while(currBal < updatedTargetRetAmt){
           currBal = annualCont + currBal * (1 + netPreRetROR)
          retAge += 1;
           if(retAge>99) break;
  
         }
         return retAge;
       })
  
       useEffect(()=>{
             localStorage.setItem("retirementAge", retirementAge);
             localStorage.setItem("targetRetAmt",targetRetAmt);
             localStorage.setItem("annualRetExp",annualRetExp);
             localStorage.setItem("currentAge",currentAge);
             localStorage.setItem("currentSavings",currentSavings);
             localStorage.setItem("contributions",contributions);
             localStorage.setItem("contributionFreq",contributionFreq);
             localStorage.setItem("preRetROR",preRetROR);
             localStorage.setItem("postRetROR",postRetROR);
             localStorage.setItem("inflation",inflation);
  
             let netPostRetROR = (postRetROR - inflation)/100;
            if(netPostRetROR === 0) netPostRetROR =0.00001;
  
            let updatedTargetetAmt = annualRetExp / netPostRetROR;
            setTargetRetAmt(updatedTargetetAmt);
  
            const retAge = calcRetirementAge(updatedTargetetAmt);
            setRetirementAge(retAge);
       }, [annualRetExp, currentAge, currentSavings, contributions,contributionFreq, preRetROR, postRetROR, inflation])
  
    return (
      <>
        <Surveyheader/>
      {
        logindata.length === 0 ? "Page not found" :
        <>
         <div style={{display:"flex",justifyContent:"right",marginRight:"3rem",marginTop:"0.75rem"}}><Button onClick={userlogout}>LogOut</Button></div>
      <div className="App">
      <div className='img' style={{position:"relative"}}>
        <img src="https://softauthor.com/wp-content/uploads/2021/08/CSS-Background-Image-Full-Screent-With-background-Image-1024x903.png"></img>
      </div>
      <div style={{position:"absolute"}}>
      <h1 className='color'>Retirement Calculator</h1>
      <h2 className='color'>You can retire at age {retirementAge}</h2>
      <div className='color'>Target retirement amount {formatter.format(targetRetAmt)}</div>
      <div className='simple'>
      <form className="clac-form">
        <lable className="a1 color"> Anual retirement expenses(today's rupees)
          <input type="number" value={annualRetExp} onChange={(e) => setAnnualRetExp(parseInt(e.target.value) || 0)}/>
        </lable>
        <lable className="a1 color"> Current age
          <input type="number" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)}/>
        </lable>
        <lable className="a1 color"> Current saving balance
          <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(parseInt(e.target.value) || 0)}/>
        </lable>
        <lable className="a1 color"> Regular contributions
          <input type="number" value={contributions} onChange={(e) => setContributions(parseInt(e.target.value) || 0)}/>
        </lable>
        <lable className="a1 color"> Contribution frequency
         <select
          value={contributionFreq}
          onChange={(e) => setContributionFreq(e.target.value)}
         >
          <option value="Monthly" className='color'>Monthly</option>
          <option value="Anually" className='color'>Anually</option>
          </select>
          </lable>
          </form>
      </div>
      <form>
          <div className='advanced'>
          <h2 style={{marginLeft:"10vw"}} className='color'>Advanced</h2>
            <div>
            <lable style={{marginRight:"0.7rem", marginLeft:"16rem"}} className='color'>
              Pre-retirement return
              <input type="number" value={preRetROR} onChange={(e) => setPreRetROR(parseInt(e.target.value) || 0)}/>
            </lable>
            <lable style={{marginRight:"0.7rem"}} className='color'>
              Post-retirement return
              <input type="number" value={postRetROR} onChange={(e) => setPostRetROR(parseInt(e.target.value) || 0)}/>
            </lable>
            <lable style={{marginRight:"0.6rem"}} className='color'>
              Inflation
              <input type="number" value={inflation} onChange={(e) => setInflation(parseFloat(e.target.value) || 0)}/>
            </lable>
            </div>
          </div>
      </form>
      </div>
    </div>
      </>}
      
    </>
    );
}

export default Survey2
