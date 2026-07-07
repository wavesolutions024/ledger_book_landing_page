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
import { FaUserGear } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaCircleNodes } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import worker1 from "../../assets/worker1.png";
import worker2 from "../../assets/worker2.png";
import worker3 from "../../assets/worker3.png";
import audi from "../../assets/audi.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import logo from "../../assets/autologo.png";
import laptop from "../../assets/laptop.avif";
import carbuying from "../../assets/carbuying.webp";

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

      <div className="problem_parent parent">
        <div className="problem_cont cont">
          <h1>THE PROBLEM</h1>
          <h2>
            Paper registers are costing you money
            every day 
          </h2>

          <p>
            Most jeweller still manage gold loans in diaries, Excel sheets, or loose papers. One
            wrong entry, one missed interest date, one lost record-and thousand of rupees 
            disappear without a trace.
          </p>

          <div className="top_content">
            <div className="box">
              <span><FaBook /></span>
              <h3>Lost Records</h3>
              <p>
                A torn page, a spilled chai, a stolen register-and months
                of loan data is gone. No backup, no recovery.
              </p>
            </div>
            <div className="box">
              <span><CiCalculator1 /></span>
              <h3>Wrong Calculation</h3>
              <p>
               Manual interest calculation on multiple loans every day leade to error.
               Customer overcharge or underchange-both hurt your business.
              </p>
            </div>
            <div className="box">
              <span><CiStopwatch /></span>
              <h3>Missed Due Dates</h3>
              <p>
                Without automatic reminders, your forget to follow up. Coustomer
                delay repayment. your cash flow suffers.
              </p>
            </div>
          </div>

          <h4>
            There is a better wat-less time,zero calculation erroes, every record safe forever.
          </h4>
        </div>
      </div>

      <div className="about_parent parent">
        <div className="about_cont cont">
          <h1>FEATURE</h1>

          <h2>Everything your jewellery shop needs. Nothings you doesn't.</h2>

          <p>
            Ledger Book is built specifically for gold jewellers - not a generic accounting tool
            adapted for your shop. Every feature solves areal problem jewellers face daily.
          </p>

          <div className="top_content">
            <div className="box">
              <span>
                <FaMedal />
              </span>
              <h3>Gold Loan Management</h3>
              <p>
                Add a new loan in 30 seconds. Track pledged gold weight, purity, customer name and loan 
                amount. Auto-calculate interest daily or monthly. 
              </p>
            </div>
            <div className="box">
              <span>
                <FaHandshakeAngle />
              </span>
              <h3>Bhishi Scheme Management</h3>
              <p>
                Manage Suvarn Bhishi, Sanchay Yojana and custom chit fund schemes. Track every member's 
                installment and auto-calculate maturity payouts. 
              </p>
            </div>
            <div className="box">
              <span>
                <MdBarChart />
              </span>
              <h3>Instant Business Reports</h3>
              <p>
                See total outstanding loans, overdue accounts, collections this month and profits — with one 
                tap. No accountant needed.
              </p>
            </div>
          </div>
          <div className="top_content">
            <div className="box">
              <span>
                <FaCloud />
              </span>
              <h3>Digital Receipts on WhatsApp</h3>
              <p>
                Generate a professional receipt in seconds and send it directly to your customer on WhatsApp. 
                No printer needed.
              </p>
            </div>
            <div className="box">
              <span>
                <FaBell />
              </span>
              <h3>Automatic Due Reminders</h3>
              <p>
                Set it once. Ledger Book automatically reminds you and your customers before loan due dates 
                - so you never miss a collection. 
              </p>
            </div>
            <div className="box">
              <span>
                <FaLock />
              </span>
              <h3>Safe & Secure Data</h3>
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
            This isn't a download-and-figure-it-out app. Our team comes to you shop, installs
            Ledger Book on your desktop or tablet, and get your existing record in before we leave.
          </p>

          <div className="top_content">
            <div className="box">
              <span>01</span>
              <h3>Book a Free Demo</h3>
              <p>
                Tell us about your shop. we'll show you exactly how Ledger Book Works
                for your gold loans and Bhishi schemes-no commitment.
              </p>
            </div>
            <div className="box">
              <span>02</span>
              <h3>Our Team Sets it Up</h3>
              <p>
                we visit your shop, install Ledger Book on your desktop or tablet, and
                migrate your existing loan and customer record for you.
              </p>
            </div>
            <div className="box">
              <span>03</span>
              <h3>You Run Your Shop Digitally</h3>
              <p>
                Auto-calculate interest, instant receipts, due-date reminders and 
                monthly reports-ready to use at your counter,no IT skills needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Count_parent parent">
        <div className="Count_cont cont">
          <div className="top_content">
            <div className="box">
              <h1>500+</h1>
              <h2>Jewellers Using Ledger Book</h2>
            </div>

            <div className="box">
              <h1>₹14/day</h1>
              <h2>Cost Per Shop </h2>
            </div>

            <div className="box">
              <h1>2 hrs</h1>
              <h2>Saved Daily Per Shop</h2>
            </div>

            <div className="box">
              <h1>15 min</h1>
              <h2>Free Onboarding Call </h2>
            </div>
          </div>
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
                <h3>₹5,000</h3>
                <span>/year</span>
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
                <h3>₹499</h3>
                <span>/month</span>
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

      <div className="team_parent parent">
        <div className="team_cont cont">
          <h1>Meet Our Expertise</h1>
          <h2>Our Awesome Team</h2>

          <div className="members">
            <div className="member">
              <img src={worker1} alt="worker 1" />
            </div>

            <div className="member">
              <img src={worker2} alt="worker 2" />
            </div>

            <div className="member">
              <img src={worker3} alt="worker 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="home_parent ">
        <div className="appointment_parent">
          <div className="appointment_form">
            <h1>Book An Appointment</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <select>
                <option>Select Service</option>
                <option>Car Repair</option>
                <option>Maintenance</option>
                <option>Inspection</option>
              </select>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer_parent parent">
        <div className="footer_cont cont">
          <div className="footer_col">
            <img src={logo} alt="" />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever.
            </p>
          </div>

          <div className="footer_col">
            <h3>Page</h3>
            <p>Home</p>
            <p>About</p>
            <p>Demo</p>
            <p>Contact</p>
          </div>

          <div className="footer_col">
            <h3>Address</h3>
            <p>Head Office Address</p>
            <p>121 King Street, Melbourne West, Australia</p>
            <p>Phone: 888 123-4587</p>
            <p>Email: info@example.com</p>
          </div>
        </div>

        <div className="footer_note">
          <p>Privacy Policy | © 2026 Autalogic. Wave Solution</p>
        </div>
      </div>
    </>
  );
};

export default Home;
