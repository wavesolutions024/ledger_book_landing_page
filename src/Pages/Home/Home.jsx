import React from "react";
import "./Home.scss";
import abt_img from "../../assets/car.png";
import heroImg from "../../assets/hero.png";
import { LuFileText } from "react-icons/lu";
import { FaCarBattery } from "react-icons/fa";
import { TbSettingsBolt } from "react-icons/tb";
import { PiEngineBold } from "react-icons/pi";
import { GiFlatTire } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
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
            <h1> Best Car Reparing Services</h1>
            <p>
              Quality auto repair wordpress Theme in Envato Market. We offer a
              varity of custom services.
            </p>
            <div className="buttons">
              <button className="btn">More About</button>
            </div>
          </div>

          <div className="hero_right">
            <h2>Request a Quote</h2>
            <p>Fill out the from below and we'll get back to you soon.</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="hero_parent parent">
        <div className="hero_cont cont">
          <h1>About Our Company</h1>
          <h2>How We Can Help you</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the
             majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are 
              going to use a passage of Lorem Ipsum
          </p>
          <p>
            There isn't anything embarrassing hidden in the middle of text. All the Lorem 
            Ipsum generators on the Internet tend to repeat predefined chunks as necessary 
            you need to be sure
          </p>

          <button className="btn">More About Us</button>
        </div>

        <div className="hero_img">
          <img src={heroImg} alt="About Company"/>
        </div>
      </div> */}

      <div class="abt_parent parent">
        <div class="abt_cont cont">
          <div class="abt_left">
            <span>About Our Company</span>
            <h3>How We Can Help You</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum
            </p>
            <p>
              There isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary you need to be sure
            </p>
            <div class="btn">
              More About Us
            </div>
          </div>
          <div class="abt_right">
            <div class="abt_inner_image bg-img-cover">
              
            </div>
          </div>
        </div>
      </div>

      <div className="about_parent parent">
        <div className="about_cont cont">
          <h1>What We Do</h1>
          <h2>Our Services</h2>

          <div className="top_content">
            <div className="box">
              <span>
                <LuFileText />
              </span>
              <h3>Diagnostic</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
            <div className="box">
              <span>
                <FaCarBattery />
              </span>
              <h3>Batteries</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
            <div className="box">
              <span>
                <TbSettingsBolt />
              </span>
              <h3>Breaks</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
          </div>
          <div className="top_content">
            <div className="box">
              <span>
                <PiEngineBold />
              </span>
              <h3>Engine Repair</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
            <div className="box">
              <span>
                <GiFlatTire />
              </span>
              <h3>Tires Replacement</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
            <div className="box">
              <span>
                <FaCar />
              </span>
              <h3>Transmission</h3>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Count_parent parent">
        <div className="Count_cont cont">
          <div className="top_content">
            <div className="box">
              <span>
                <FaUserGear />
              </span>
              <h1>300+</h1>
              <h2>Expert Technicians</h2>
            </div>

            <div className="box">
              <span>
                <FaUserGroup />
              </span>
              <h1>1026</h1>
              <h2>Satisfied Client</h2>
            </div>

            <div className="box">
              <span>
                <FaCircleNodes />
              </span>
              <h1>25+</h1>
              <h2>Years Experience</h2>
            </div>

            <div className="box">
              <span>
                <FaCarSide />
              </span>
              <h1>3215</h1>
              <h2>Complete Project</h2>
            </div>
          </div>
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
