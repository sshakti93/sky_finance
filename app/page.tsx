import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div>
      <div className="first-section">
        <div className="bg-img">
          <Image src={"/images/bgimg.svg"} alt="" width={1440} height={952}/>
        </div>
        <div className="text-grp">
          <div className="welcome-text">
            <p>WELCOME TO SKY FINANCIAL</p>
          </div>
          <div className="quote-text">
            <p>Life's a Journey,<br></br> Fly Confidently<br></br> with our<br></br> Protection<span className="fullstop-quote">.</span></p>
          </div>
          <div className="text-desc">
            <p>At Sky Financial, we specialize in providing comprehensive<br></br> life insurance and annuity options tailored to meet the<br></br> unique needs of individuals across all age groups and<br></br> income levels. As a licensed provider in all 50 states, we<br></br> are dedicated to helping clients nationwide secure their<br></br> financial futures with innovative insurance solutions.</p>
            <p>Explore our website to learn more about our products and how we can help you achieve peace of mind and financial security.</p>         
          </div>
          <div className="getInTouch">
            <div className="touch-text">
              <p>Get in touch</p>
            </div>
            <div className="touch-arrow">
              <Image src={"/images/arrow1.svg"} alt="" width={24} height={18}/>
            </div>
          </div>
        </div>
      </div>
      

      {/* second section */}
        <div className="second-section">
          <div className="second-section-top">
        
          <div className="top-left">
            <h1>CARDS</h1>
          </div>


          <div className="top-right">
            <div className="welcome-text">
              <p>WHO WE ARE?</p>
            </div>
            <div className="who-title">
              <p>Your Trusted Insurance<br></br>Partner<span className="fullstop-quote">.</span></p>
            </div>
            <div className="text-desc">
              <p>Sky Financial is a leading provider of life insurance and annuity solutions nationwide. With<br></br> years of experience helping clients achieve financial security, we have earned a reputation<br></br> for excellence and reliability in the insurance industry.</p>
              <p>Our dedicated team of agents is committed to providing personalized service and<br></br> innovative solutions tailored to meet the unique needs of each client. We understand that<br></br> every individual's financial situation is different, and we take the time to listen and<br></br> recommend the best options for your needs and goals.</p>
              <p>At Sky Financial, we are passionate about helping our clients secure their financial futures<br></br> and enjoy peace of mind knowing that their loved ones are protected.</p>
            </div>

          </div>
        </div>


        <div className="second-section-bottom">


          {/* first card */}



          <div className="first-card">
            <div className="card-img">
              <Image src={'/images/annuities.svg'} alt="" width={60} height={60}/>
            </div>
            <div className="card-defn">
              <p>ANNUITIES</p>
            </div>
            <div className="card-title">
              <p>Secure Your Retirement</p>
            </div>
            <div className="card-desc">
              <p>Planning for retirement is a crucial step in<br></br> achieving long-term financial security.<br></br> Annuities offer a reliable way to generate<br></br> guaranteed income for life, ensuring that you<br></br> can enjoy your retirement years with<br></br> confidence.</p>
              <p>At Sky Financial, we specialize in annuity<br></br> products tailored to the needs of high net<br></br> worth individuals. Our exclusive offerings<br></br> provide competitive returns and tax<br></br> advantages, allowing you to maximize your<br></br> retirement savings and enjoy a worry-free<br></br> future.</p>
              <p>Whether you're looking for immediate income<br></br> or a deferred annuity to supplement your<br></br> retirement savings, our team of experts will<br></br> help you navigate the options and find the<br></br> right solution for your needs.</p>
            </div>

          </div>

          {/* second card */}
          
          
          <div className="second-card">
          <div className="card-img">
              <Image src={'/images/lifeinsurance.svg'} alt="" width={60} height={60}/>
            </div>
            <div className="card-defn">
              <p>LIFE INSURANCE</p>
            </div>
            <div className="card-title">
              <p>Protecting What Matters Most</p>
            </div>
            <div className="card-desc">
              <p>Comprehensive Coverage for Peace of Mind: Our life insurance plans offer robust protection, ensuring you and your family can face life's uncertainties with confidence.</p>
              <p>Whether you're a young family just starting out or a retiree looking to leave a legacy, our experienced agents will work closely with you to understand your needs and goals, and recommend a policy that fits your budget and lifestyle.  </p>
              <p>With Sky Financial, you can rest assured that your loved ones will be taken care of no matter what the future holds.</p>
            </div>

          </div>


          {/* third card */}


          <div className="first-card">
          <div className="card-img">
              <Image src={'/images/taxbenefit.svg'} alt="" width={60} height={60}/>
            </div>
            <div className="card-defn">
              <p>TAX BENEFIT PROGRAMS</p>
            </div>
            <div className="card-title">
              <p>Maximize Your Savings</p>
            </div>
            <div className="card-desc">
              <p>Life insurance and annuities offer significant tax benefits that can help you maximize your savings and minimize your tax liability. With life insurance, the death benefit is typically paid out to your beneficiaries tax-free, providing them with financial security without the burden of taxes.</p>
              <p>Similarly, annuities offer tax-deferred growth, meaning you won't pay taxes on your earnings until you start receiving income. This allows your retirement savings to grow faster and gives you more control over when you pay taxes.</p>
              <p>At Sky Financial, we can help you take advantage of these tax benefit programs and create a comprehensive financial strategy that minimizes your tax liability while maximizing your savings potential.</p>
            </div>

          </div>
        </div>
        </div>














    </div>
    
  );
}
