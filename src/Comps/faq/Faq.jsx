import React, { useState } from "react";
import "./Faq.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Faq = () => {
  const [active, setActive] = useState();
  const faqContent = [
    {
      faq_heading:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, libero.",
      faq_content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto",
    },
    {
      faq_heading:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, libero.",
      faq_content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto",
    },
    {
      faq_heading:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, libero.",
      faq_content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores qui, debitis sint fugiat obcaecati aut ipsum culpa optio architecto",
    },
  ];

  return (
    <div>
      <div class="faq_parent parent">
        <div class="faq_cont cont">
          {faqContent.map((item, index) => (
            <div
              class={active === index ? "faq active" : "faq"}
              onClick={() => setActive(index)}
            >
              <div class="faq_heading">
                <h4>{item.faq_heading}</h4>
                <span>
                  {active === index ? <IoIosArrowUp />: 
                  <IoIosArrowDown /> }
                </span>
              </div>
              <p class="faq_content">{item.faq_content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
