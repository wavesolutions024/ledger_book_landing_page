import React from "react";
import "./Home.scss";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { FaMedal } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import dashboardImg from "../../assets/image1.png"
import waveLogo from "../../assets/wave.png"
import legerBook from "../../assets/book.png"
import Faq from "../../Comps/faq/Faq";
import demoGraphic from "../../assets/image2.png"

const Home = () => {
  return (
    <>
      <div className="hero_section parent">
        <div className="hero_cont cont">

          <div className="hero_left">

            <span className="hero_tag">
              #1 Gold Loan Software for Jewellers
            </span>

            <h1>Say goodbye to gold loan registers. Run your shop <span>digitally</span></h1>
            <p>
              Ledger Book manages your gold loans, Bhishi schemes,
              interest calculations, customer records and digital receipts-
              all in one place. Built for the shop counter. Runs on Your
              desktop or tablet.
            </p>
            <div className="buttons">
              <button className="btn1">Request a Free Demo</button>
              <button className="btn2"> ▶ Watch 60-Second Demo</button>
            </div>

            <div className="hero_points">
              <p>✔ No setup work for you</p>
              <p>✔ Our team installs it at your shop</p>
              <p>✔ Works on desktop & tablet</p>
            </div>

          </div>

          <div className="hero_right">
            <h2>Request a Free Demo</h2>
            <p>Just share a few details about your shop - our team will set everything up for you.</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Shop Name / WhatsApp Number" />
              <textarea placeholder="Message-e.g. I manage gold loans and Bhishi schemes for 30+ customers"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="abt_parent parent">
        <div className="abt_cont cont">

          <div className="abt_left">
            <h1>ABOUT WAVE SOLUTIONS</h1>

            <h2>Building Smarter Software <br /> for Jewellery Businesses</h2>

            <p>
              At <span>Wave Solution</span>, we develop practical software that
              helps businesses replace manual processes with simple, secure, and
              efficient digital solutions. Our goal is to solve real business
              challenges with technology that is easy to use and delivers
              measurable results.
            </p>

            <p>
              Understanding the day-to-day operations of jewellery shops, we
              created <span>Ledger Book</span>—a dedicated software solution
              designed to simplify gold loan and Bhishi management. From
              maintaining customer records and tracking pledged gold to
              calculating interest automatically and generating digital
              receipts, Ledger Book brings every essential operation together
              in one secure platform.
            </p>

            <p>
              Today, <span>Ledger Book</span> helps jewellery businesses
              streamline operations, reduce errors, safeguard valuable records,
              and focus on what matters most—serving customers and growing
              their business.
            </p>

            <h3>
              Simple. Secure. Built for Jewellers.
              <span> Powered by Wave Solutions.</span>
            </h3>
          </div>

          <div className="abt_right">

            <div className="logo_row">

              <div className="wave_logo">
                <img src={waveLogo} alt="Wave Solutions" />
              </div>

              <div className="divider"></div>

              <div className="ledger_logo">
                <img src={legerBook} alt="Ledger Book" />
              </div>

            </div>

            <div className="dashboard_img">
              <img src={dashboardImg} alt="Dashboard" />
            </div>

          </div>

        </div>
      </div>

      <div className="problem_parent parent">
        <div className="problem_cont cont">
          <h1>THE PROBLEM</h1>
          <h2>
            Paper registers are costing you money
            every day
          </h2>

          <p>
            Most jewellers still manage gold loans in diaries, Excel sheets, or loose papers. One
            wrong entry, one missed interest date, one lost record-and thousands of rupees
            disappear without a trace.
          </p>

          <div className="top_content">

            <div className="box">

              <div className="box_header">
                <span><FaBook /></span>
                <h3>Lost Records</h3>
              </div>

              <p>
                A torn page, a spilled chai, a stolen register-and months
                of loan data is gone. No backup, no recovery.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><CiCalculator1 /></span>
                <h3>Wrong Calculation</h3>
              </div>

              <p>
                Manual interest calculation on multiple leads every day leade to error.
                Customer overcharge or undercharge-both hurt your business.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><CiStopwatch /></span>
                <h3>Missed Due Dates</h3>
              </div>

              <p>
                Without automatic reminders, you forget to follow up. Customer
                delay repayment. your cash flow suffers.
              </p>
            </div>
          </div>

          <h4>
            There is a better way-less time,zero calculation errors, every record safe forever.
          </h4>
        </div>
      </div>

      <div className="about_parent parent">
        <div className="about_cont cont">
          <h1>FEATURE</h1>

          <h2>Everything your jewellery shop needs. Nothings you doesn't.</h2>

          <p>
            Ledger Book is built specifically for gold jewellers - not a generic accounting tool
            adapted for your shop. Every feature solves a real problem jewellers face daily.
          </p>

          <div className="top_content">

            <div className="box">
              <div className="box_header">
                <span><FaMedal /></span>
                <h3>Gold Loan Management</h3>
              </div>

              <p>
                Add a new loan in 30 seconds. Track pledged gold weight, purity, customer name and loan
                amount. Auto-calculate interest daily or monthly.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><FaHandshakeAngle /></span>
                <h3>Bhishi Scheme Management</h3>
              </div>

              <p>
                Manage Suvarn Bhishi, Sanchay Yojana and custom chit fund schemes. Track every member's
                installment and auto-calculate maturity payouts.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><MdBarChart /></span>
                <h3>Instant Business Reports</h3>
              </div>

              <p>
                See total outstanding loans, overdue accounts, collections this month and profits — with one
                tap. No accountant needed.
              </p>
            </div>
          </div>

          <div className="top_content">

            <div className="box">
              <div className="box_header">
                <span><FaCloud /></span>
                <h3>Digital Receipts on WhatsApp</h3>
              </div>

              <p>
                Generate a professional receipt in seconds and send it directly to your customer on WhatsApp.
                No printer needed.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><FaBell /></span>
                <h3>Automatic Due Reminders</h3>
              </div>

              <p>
                Set it once. Ledger Book automatically reminds you and your customers before loan due dates
                - so you never miss a collection.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span><FaLock /></span>
                <h3>Safe & Secure Data</h3>
              </div>

              <p>
                All records are encrypted and backed up securely. Even if you change your phone, all data is
                restored instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="work_parent parent">
        <div className="work_cont cont">
          <h1>HOW IT WORKS</h1>
          <h2>We Set It Up. You Just Start Using It.</h2>
          <p>
            This isn't a download-and-figure-it-out app. Our team comes to your shop, installs
            Ledger Book on your desktop or tablet, and gets your existing records in before we leave.
          </p>

          <div className="top_content">

            <div className="box">
              <div className="box_header">
                <span>01</span>
                <h3>Book a Free Demo</h3>
              </div>

              <p>
                Tell us about your shop. we'll show you exactly how Ledger Book Works
                for your gold loans and Bhishi schemes-no commitment.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span>02</span>
                <h3>Our Team Sets it Up</h3>
              </div>

              <p>
                we visit your shop, install Ledger Book on your desktop or tablet, and
                migrate your existing loan and customer record for you.
              </p>
            </div>
            <div className="box">
              <div className="box_header">
                <span>03</span>
                <h3>You Run Your Shop Digitally</h3>
              </div>

              <p>
                Auto-calculate interest, instant receipts, due-date reminders and
                monthly reports-ready to use at your counter,no IT skills needed.
              </p>
            </div>
          </div>
          <h4>
            There's nothing for you to install or configure. Our team handles the entire
            setup — onsite, at your shop.
          </h4>
        </div>
      </div>

      <div className="result_parent parent">
        <div className="result_cont cont">
          <h1>WHAT JEWELLERS SAY</h1>
          <h2>Real shops. Real results.</h2>

          <div className="top_content">
            <div className="box">
              <p>
                “I used to spend 2 hours every evening updating loan registers. Now it takes 10 minutes. My
                customers also love getting receipts on WhatsApp.”
              </p>

              <div className="bottom">
                <span>RS</span>

                <div className="name">
                  <h1>Ramesh Soni</h1>
                  <p>Gold Jeweller, Pune - Laxmi Road</p>
                </div>
              </div>
            </div>

            <div className="box">
              <p>
                “Bhishi collection used to be a nightmare every month. With Ledger Book, everything is
                automatic. No more chasing members for installments.”
              </p>

              <div className="bottom">
                <span>SD</span>

                <div className="name">
                  <h1>Sunita Deshpande</h1>
                  <p>Jewellery Shop Owner, Nashik</p>
                </div>
              </div>
            </div>

            <div className="box">
              <p>
                “I was worried it would be too complicated. But the setup call made it easy. We were up and
                running the same day.”
              </p>

              <div className="bottom">
                <span>VP</span>

                <div className="name">
                  <h1>Vijay Pawar</h1>
                  <p>Jeweller, Kolhapur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing_parent parent">
        <div className="pricing_cont cont">

          <h1>One Software. One Price. No Surprises.</h1>

          <p>
            No per-user charges. No module upgrades. Everything is included — gold loans,
            Bhishi, receipts, reports — for one flat price.
          </p>

          <div className="pricing_box">
            <div className="card">

              <span className="tag">BEST VALUE</span>
              <h2>ANNUAL PLAN</h2>

              <div className="price">
                <h3></h3>
                <span></span>
              </div>

              <p className="offer">just ₹14 per day</p>
              <ul>
                <li>✓ Unlimited gold loan entries</li>
                <li>✓ Bhishi / Sanchay Yojana management</li>
                <li>✓ Auto interest calculation</li>
                <li>✓ Digital receipts via WhatsApp</li>
                <li>✓ Due date reminders</li>
                <li>✓ Monthly business reports</li>
                <li>✓ Secure cloud data backup</li>
                <li>✓ Free onboarding setup call</li>
                <li>✓ Email & WhatsApp support</li>
              </ul>

              <button>Start Free Trial</button>

            </div>

            <div className="card">
              <h2>MONTHLY PLAN</h2>

              <div className="price">
                <h3></h3>
                <span></span>
              </div>

              <p className="offer">Start small, upgrade anytime</p>

              <ul>
                <li>✓ Unlimited gold loan entries</li>
                <li>✓ Bhishi scheme management</li>
                <li>✓ Auto interest calculation</li>
                <li>✓ Digital receipts via WhatsApp</li>
                <li>✓ Due date reminders</li>
                <li>✓ Monthly reports</li>
                <li>✓ Data backup</li>
                <li>✓ WhatsApp support</li>
                <li>✓ Upgrade to annual anytime</li>
              </ul>

              <button className="outline">Start Free Trial</button>

            </div>
          </div>

          <p className="bottom_text">
            All plans include a 15-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
      <Faq />
      <div className="demo_parent parent">
        <div className="demo_cont cont">

          <div className="demo_left">
            <h1>GET STARTED</h1>
            <h2>Book your free demo </h2>

            <div className="graphic_box">
              <img src={demoGraphic} alt="Demo Graphic" />
            </div>
          </div>

          <div className="demo_right">
            <form>
              <div className="input_box">
                <label>Your Name *</label>
                <input type="text" placeholder="e.g Ramesh Soni" />
              </div>

              <div className="input_box">
                <label>Shop Name *</label>
                <input type="text" placeholder="e.g Soni Jewellers" />
              </div>

              <div className="row">
                <div className="input_box">
                  <label>Phone / WhatsApp</label>
                  <input type="text" placeholder="98XXXXXXXX" />
                </div>

                <div className="input_box">
                  <label>City</label>
                  <input type="text" placeholder="e.g. Pune" />
                </div>
              </div>

              <div className="input_box">
                <label>I'm interested in</label>

                <select>
                  <option> Gold Loan Management</option>
                  <option>Bhishi-Sanchay Yojana</option>
                  <option>Both</option>
                  <option>Not sure</option>
                </select>
              </div>

              <button type="submit">Request Free Demo</button>

              <p>
                No credit card required. Your details are kept private and never shared.
              </p>

            </form>
          </div>
        </div>
      </div>

      <div className="final_parent parent">
        <div className="final_cont cont">

          <h2>Your Gold Loan Register Is Costing You Time & Money Every Day.</h2>
          <p>
            Join 500+ jewellers who have already switched to Ledger Book. Start your free 15-day
            trial today — no credit card, no risk.
          </p>

          <button>
            Start Free Trial — It's 100% Free
          </button>

          <h3>
            Questions? WhatsApp us: +91 XXXXX XXXXX  |  No credit card required  |  Free
            setup call included
          </h3>

          <h4>
            Not ready yet? Download our free PDF guide: "5 Ways Gold Loan Errors Are Losing You Money"
          </h4>
        </div>
      </div>

      <div className="footer_parent parent">
        <div className="footer_cont cont">

          <div className="footer_top">
            <div className="footer_logo">
              <h2> Ledger Book — The Digital Ledger for<br /> every Jewellery Shop.</h2>
            </div>

            <div className="footer_links">
              <a href="#">How It Works</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms Of Use</a>
            </div>
          </div>

          <div className="footer_bottom">
            <div className="footer_info">
              <p>
                WhatsApp: +91 XXXXX XXXXX  |  Email: support@ledgerbook.in  |  Pune,
                Maharashtra
              </p>
              <h3> © 2026 Ledger Book. All rights reserved.</h3>
            </div>

            <div className="footer_social">
              <a href="#">Instagram</a>
              <a href="#">Google</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
