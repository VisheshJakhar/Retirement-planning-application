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

  const surveypage = ()=>{
    history("/survey");
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
                      <div><img src = "https://www.mastertrust.co.in/MediaGalary/Blogs/BannerImage/BannerImage20220821103935711.jpg" className='col-lg-12' style={{height:"40vh"}}></img></div>
                      <div style={{padding:"2rem"}}>
                        <h1>Step-By-Step Approach To Retirement Planning</h1>
                        <p>Retirement planning refers to the process that is undertaken to maintain one’s finances after one leaves their job or career. Retirement is inevitable and late planners truly bear the brunt of it. Retirement planning is highly crucial because one continues living but they may not have a fixed flow of income and with rising inflation, the value of money also keeps declining. Thus, it is essential to start the retirement planning process at an early age so that one can lead a happy post-retirement life and maintain a good standard of living.</p>
                        <p>Here’s a step-by-step approach that one should follow for successful retirement planning: -</p>
                        <h5>1.   Choose your Retirement Age</h5>
                        <p>The first and the most important step in retirement planning is to determine the retirement age. For every individual, the retirement age may differ, depending on their future goals and liabilities. Some may plan to retire at the age of 60, while some may want to take early retirement and spend that time doing what they love and dreamt of. Thus, to calculate how much money one must spare for retirement, one must decide at what age one wishes to retire.</p>
                        <p>To determine the retirement age, one must also keep in mind the average life expectancy based on age, medical condition, family history, and other factors.</p>
                        <h5>2.   Determine how much Retirement Corpus you need</h5>
                        <p>The amount of money required to retire depends on one’s current income and expenses and how these factors will change in retirement. As such, it is not possible to calculate the exact amount; however, one should be able to reach a ballpark figure considering various aspects like current age, medical conditions, current liabilities, post-retirement life plans and current expenses.</p>
                        <p>One must keep the rate of inflation in mind while calculating the corpus required to retire at any age. Accordingly, it can be decided which mode of investment is ideal to plan retirement.</p>
                        <h5>3.   Know when to start retirement planning</h5>
                        <p>The earlier one starts planning for retirement, the more time they get for their money to grow. It's never too late to start thinking about retirement. Every rupee that an individual can start saving at any age can reap great benefits at the time of retirement. Although it is never too late to begin making plans for retirement, it is undeniable that doing so earlier can result in greater benefits. It is crucial to think about long-term benefits as a considerable amount of financial corpus during one’s lifetime is spent on long-term goals. Basically, the golden rule is to start early so that you can accumulate a bigger corpus for your future years.</p>
                        <h5>4.   Review your Assets and Sources of Income</h5>
                        <p>Another important step in retirement financial planning is to look at your present assets and current sources of income. This will enable you to assess how your assets and incomes will look when you retire. Thus, one must conduct a perfect review of personal savings, pensions, investment portfolios, side hustles, and other sources of income. Also, this facilitates in freeing up the extra money and investing in your retirement fund.</p>
                        <h5>5.   Plan a suitable Portfolio with the help of a Financial Advisor</h5>
                        <p>Once you have completed the aforesaid steps and are clear and you have decided on the retirement corpus that you need, you must seek help of a competent financial advisor who can guide you well in every step to plan your retirement. It must be remembered that one must have a diversified portfolio across all asset classes to reap maximum benefits from their investment planning.</p>
                        <p>For e.g., some assets like equities are able to offer a better inflation-adjusted return than fixed income instruments. Accordingly, one must carefully decide which asset class is chosen and how diversified it is. A well-balanced portfolio can truly help individuals in achieving their retirement corpus with ease. This all will also be dependent on what age you start to plan for retirement and what is your risk taking capacity.</p>
                        <p>Lastly, one must avoid digging into their retirement fund and not withdraw funds from the investments made as the retirement fund suffers a massive blow each time any amount is withdrawn from the corpus. Another point to keep in mind is to not let unplanned expenditures get in the way of your retirement savings. Always maintain a contingency fund for uncertain events like medical emergencies, loss of job, etc. Such planning will not befall you and help you in retirement planning in a systematic manner.</p>
                        <p>Do not wait! Make your post-retirement life easy by beginning the retirement financial planning process today. Connect with mastertrust for guidance and support on all matters related to the financial planning process steps for retirement.</p>
                      </div>
                      <div style={{display:"flex",justifyContent:"center",marginRight:"3rem",marginTop:"0.75rem"}}><Button onClick={surveypage}>Go to survey page</Button></div>
                  </>
          }
      </>
  )
}

export default Summary