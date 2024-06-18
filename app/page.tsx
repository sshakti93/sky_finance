"use client";

import Image from "next/image";
import "./page.css";
import Headerpage from "./Components/Headerpage/Headerpage";
import Accordion from "./Components/Accordion/page";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact.tsx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    }
  };

  return (
    <div className={"fullpage-main"}>
      <div className="first-section">
        <Headerpage />
        <div className="media-only-img">
          <Image src={"/images/mobbg.svg"} alt="" width={360} height={346} />
        </div>
        <div className="tab-only-img">
          <Image src={"/images/mobbg.svg"} alt="" width={560} height={546} />
        </div>
        <div className="text-grp-one">
          <div className="welcome-text">
            <p>WELCOME TO SKY FINANCIAL</p>
          </div>
          <div className="quote-text">
            <p>
              Life's a Journey,<br></br> Fly Confidently<br></br> with our
              <br></br> Protection<span className="fullstop-quote">.</span>
            </p>
          </div>
        </div>
        <div className="text-grp-two">
          <div className="text-desc">
            <p>
              At Sky Financial, we specialize in providing comprehensive life
              insurance and annuity options tailored to meet the unique needs of
              individuals across all age groups and income levels. As a licensed
              provider in all 50 states, we are dedicated to helping clients
              nationwide secure their financial futures with innovative
              insurance solutions.
            </p>
            <p>
              Explore our website to learn more about our products and how we
              can help you achieve peace of mind and financial security.
            </p>
          </div>
          <div className="getInTouch">
            <div className="touch-text">
              <p>Get in touch</p>
            </div>

            <div className="touch-arrow">
              <Image src={"/images/arrow1.svg"} alt="" width={24} height={18} />
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="second-section">
        <div className="second-section-top">
          <div className="mobcards">
            <Image
              src={"/images/mobcards.svg"}
              alt=""
              width={312}
              height={340}
            />
          </div>
          <div className="top-left">
            <div className="card">
              <Image
                src={"/images/firstimg.svg"}
                alt=""
                width={584}
                height={444}
              />
            </div>
            {/* <div className="card">
              <Image
                src={"/images/firstimg.svg"}
                alt=""
                width={584}
                height={444}
              />
            </div>
            <div className="card">
              <Image
                src={"/images/firstimg.svg"}
                alt=""
                width={584}
                height={444}
              />
            </div> */}
          </div>

          <div className="top-right">
            <div className="top-welcome-text">
              <p>WHO WE ARE?</p>
            </div>
            <div className="who-title">
              <p>
                Your Trusted Insurance<br></br>Partner
                <span className="fullstop-quote">.</span>
              </p>
            </div>
            <div className="text-desc">
              <p>
                Sky Financial is a leading provider of life insurance and
                annuity solutions nationwide. With<br></br> years of experience
                helping clients achieve financial security, we have earned a
                reputation<br></br> for excellence and reliability in the
                insurance industry.
              </p>
              <p>
                Our dedicated team of agents is committed to providing
                personalized service and<br></br> innovative solutions tailored
                to meet the unique needs of each client. We understand that
                <br></br> every individual's financial situation is different,
                and we take the time to listen and<br></br> recommend the best
                options for your needs and goals.
              </p>
              <p>
                At Sky Financial, we are passionate about helping our clients
                secure their financial futures<br></br> and enjoy peace of mind
                knowing that their loved ones are protected.
              </p>
            </div>
          </div>
        </div>
        <div className="second-section-bottom-full">
          <div className="flowchart-line">
            <div className="line-in-flow"></div>
          </div>

          <div className="second-section-bottom">
            {/* first card */}

            <div className="first-card">
              <div className="card-img">
                <Image
                  src={"/images/annuities.svg"}
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <div className="card-defn">
                <p>ANNUITIES</p>
              </div>
              <div className="card-title">
                <p>Secure Your Retirement</p>
              </div>
              <div className="card-desc">
                <p>
                  Planning for retirement is a crucial step in achieving
                  long-term financial security. Annuities offer a reliable way
                  to generate guaranteed income for life, ensuring that you can
                  enjoy your retirement years with confidence.
                </p>
                <br></br>
                <p>
                  At Sky Financial, we specialize in annuity products tailored
                  to the needs of high net worth individuals. Our exclusive
                  offerings provide competitive returns and tax advantages,
                  allowing you to maximize your retirement savings and enjoy a
                  worry-free future.
                </p>
                <br></br>
                <p>
                  Whether you're looking for immediate income or a deferred
                  annuity to supplement your retirement savings, our team of
                  experts will help you navigate the options and find the right
                  solution for your needs.
                </p>
              </div>
            </div>

            <div className="linebtwcards"></div>

            {/* second card */}

            <div className="second-card">
              <div className="card-img">
                <Image
                  src={"/images/lifeinsurance.svg"}
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <div className="card-defn">
                <p>LIFE INSURANCE</p>
              </div>
              <div className="card-title">
                <p>Protecting What Matters Most</p>
              </div>
              <div className="card-desc">
                <p>
                  Comprehensive Coverage for Peace of Mind: Our life insurance
                  plans offer robust protection, ensuring you and your family
                  can face life's uncertainties with confidence.
                </p>
                <br></br>
                <p>
                  Whether you're a young family just starting out or a retiree
                  looking to leave a legacy, our experienced agents will work
                  closely with you to understand your needs and goals, and
                  recommend a policy that fits your budget and lifestyle.{" "}
                </p>
                <br></br>
                <p>
                  With Sky Financial, you can rest assured that your loved ones
                  will be taken care of no matter what the future holds.
                </p>
              </div>
            </div>
            <div className="linebtwcards"></div>
            {/* third card */}

            <div className="first-card">
              <div className="card-img">
                <Image
                  src={"/images/taxbenefit.svg"}
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <div className="card-defn">
                <p>TAX BENEFIT PROGRAMS</p>
              </div>
              <div className="card-title">
                <p>Maximize Your Savings</p>
              </div>
              <div className="card-desc">
                <p>
                  Life insurance and annuities offer significant tax benefits
                  that can help you maximize your savings and minimize your tax
                  liability. With life insurance, the death benefit is typically
                  paid out to your beneficiaries tax-free, providing them with
                  financial security without the burden of taxes.
                </p>
                <br></br>
                <p>
                  Similarly, annuities offer tax-deferred growth, meaning you
                  won't pay taxes on your earnings until you start receiving
                  income. This allows your retirement savings to grow faster and
                  gives you more control over when you pay taxes.
                </p>
                <br></br>
                <p>
                  At Sky Financial, we can help you take advantage of these tax
                  benefit programs and create a comprehensive financial strategy
                  that minimizes your tax liability while maximizing your
                  savings potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}

      <div className="third-section">
        <div className="third-left">
          <div className="welcome-text">
            <p>Get Started Today</p>
          </div>
          <div className="third-quote">
            <p>
              Ready to take the next step towards financial security
              <span className="fullstop-quote">?</span>
            </p>
          </div>
          <div className="text-desc">
            <p>
              Contact <span className="sky-text-inbtw">Sky Financial</span>{" "}
              today to schedule a consultation with one of our experienced
              agents.
            </p>
            <p>
              {" "}
              <br></br>We're here to answer your questions, address your
              concerns, and help you find the perfect insurance solutions for
              your needs.
            </p>
          </div>
        </div>
        <div className="third-right">
          <form onSubmit={handleSubmit} className="email-box">
            <div className="name-sub">
              <div className="mail-section">
                <div className="userimg">
                  <Image
                    src="/images/usericon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="linebtw"></div>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mail-section">
                <div className="userimg">
                  <Image
                    src="/images/usericon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="linebtw"></div>
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="name-sub">
              <div className="mail-section">
                <div className="userimg">
                  <Image
                    src="/images/mailimg.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="linebtw"></div>
                <input
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mail-section">
                <div className="userimg">
                  <Image
                    src="/images/phoneimg.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="linebtw"></div>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="message-content">
              <div className="mail-section-msg">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="getintouch-button">
              <button type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </div>

      {/* FOURTH SECTION */}
      {/* ------------------------ */}

      {/* first sub section */}
      <div className="fourth-section">
        <div className="left-fourth">
          <Accordion
            title="How much life insurance do I actually need?"
            content={
              <>
                <p>
                  Determining your life insurance needs depends on various
                  factors like your income, debts, and future expenses.
                </p>
                <br></br>
                <p>
                  A general rule of thumb is to aim for coverage that's 5-10
                  times your annual income.
                </p>
                <br></br>
                <p>
                  However, it's crucial to consider your specific circumstances,
                  such as outstanding debts, education expenses for dependents,
                  and future financial goals.
                </p>
                <br></br>
                <p>
                  Consulting with our financial advisor can help tailor a policy
                  that adequately protects your loved ones and aligns with your
                  long-term plans.
                </p>
              </>
            }
          />
          <Accordion
            title="How can I be sure I'm getting the best rates?"
            content={
              <>
                <p>
                  At our agency, ensuring you get the best rates is our
                  priority.
                </p>
                <br></br>
                <p>
                  We leverage our extensive network and expertise to scout for
                  the most competitive offers tailored to your needs.
                </p>
                <br></br>
                <p>
                  Our transparent approach means you'll always know you're
                  getting the best deal available.
                </p>
                <br></br>
                <p>
                  We continuously monitor the market to keep your rates
                  optimized. Trust in our commitment to securing your financial
                  future at the most favourable terms.
                </p>
              </>
            }
          />
          <Accordion
            title="How long does it take to get approved for life insurance coverage?"
            content={
              <>
                <p>
                  The approval process for life insurance coverage typically
                  ranges from a few days to several weeks.
                </p>
                <br></br>
                <p>
                  Factors such as the type of policy, your health, and the
                  insurer's underwriting process influence the timeline.
                </p>
                <br></br>
                <p>
                  Generally, simpler policies like term life insurance may be
                  approved more quickly, while complex policies or those
                  requiring medical exams may take longer.
                </p>
                <br></br>
                <p>
                  Rest assured, we strive to expedite the process while ensuring
                  thoroughness to provide you with the best coverage
                  efficiently.
                </p>
              </>
            }
          />
          <Accordion
            title="What happens if I outlive the term of my life insurance policy?"
            content={
              <>
                <p>
                  If you outlive the term of your life insurance policy, there
                  are several options available.
                </p>
                <br></br>
                <p>
                  You can choose to renew the policy, convert it to a permanent
                  life insurance policy if available, or simply let it expire.
                </p>
                <br></br>
                <p>
                  It's important to review your options with your insurance
                  provider to determine the best course of action based on your
                  current needs and financial situation.{" "}
                </p>
                <br></br>
                <p>
                  Additionally, some policies may offer the option to receive a
                  pay-out of the premiums paid, though this varies depending on
                  the terms of your policy.
                </p>
              </>
            }
          />
          <Accordion
            title="How can I ensure my life insurance policy adequately protects my loved ones?"
            content={
              <>
                <p>
                  To ensure your life insurance adequately protects your loved
                  ones, start by assessing your family's financial needs and
                  future obligations.
                </p>
                <br></br>{" "}
                <p>
                  Consider factors like mortgage payments, education expenses,
                  and living costs.
                </p>
                <br></br>{" "}
                <p>
                  Next, work closely with our expert advisors to tailor a policy
                  that aligns with your unique circumstances and provides
                  sufficient coverage.
                </p>
                <br></br>{" "}
                <p>
                  Regularly review and update your policy to accommodate any
                  changes in your life situation.
                </p>
                <br></br>{" "}
                <p>
                  Rest assured, our commitment to personalized guidance ensures
                  your loved ones are safeguarded against life's uncertainties.
                </p>
              </>
            }
          />
        </div>

        {/* IMAGE FOR MOBILE VIEW */}

        {/* second sub section */}

        <div className="right-fourth">
          <div className="frequent-text">
            <p>FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <div className="who-title">
            <p>
              Get the Answers You Need<span className="fullstop-quote">.</span>
            </p>
          </div>
          <div className="text-desc">
            <p>
              Have questions about life insurance? Explore our FAQs for clear,
              concise answers to help you make informed decisions about your
              coverage options.
            </p>
          </div>

          <div className="thinking">
            <Image
              src={"/images/thinkman.svg"}
              alt=""
              width={360}
              height={536}
            />
          </div>
        </div>
        <div className="mobthink">
          <Image
            src={"/images/mobthink.svg"}
            alt=" "
            width={312}
            height={464}
          />
        </div>
      </div>
    </div>
  );
}
