import React, { useState } from "react";
import "./Faq.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Faq = () => {
  const [active, setActive] = useState();
  const faqContent = [
    {
      faq_heading:
        "What do I need to run Ledger Book — a phone, computer?",
      faq_content:
        "Ledger Book is built to run on a desktop or tablet at your shop counter — not on a phone. This keeps the screen large enough to read interest, receipts and reports clearly while you're with a customer. ",
    },
    {
      faq_heading:
        "What happens to my data if my device is replaced? ",
      faq_content:
        "All your data is securely backed up in the cloud. When our team sets you up on a new desktop or tablet, everything is exactly where you left it — every loan, every customer, every receipt. ",
    },
    {
      faq_heading:
        "I am not very good with technology. Will this be difficult to learn?",
      faq_content:
        "You don't need to set anything up yourself. Our team visits your shop, installs Ledger Book, and personally walks you through it — so you're only ever using the finished, working system.",
    },
    {
      faq_heading:
        "Can I manage Bhishi and Sanchay Yojana schemes along with gold loans? ",
      faq_content:
        "Yes. Ledger Book is built to handle both gold loan management and Bhishi / chit fund savings schemes in one place. You can manage multiple schemes simultaneously.",
    },
    {
      faq_heading:
        "Is my customer data safe? What about privacy? ",
      faq_content:
        "Your data is encrypted and stored securely. Only you can access your shop's data. We never share customer information with any third party.",
    },
    {
      faq_heading:
        "Can I sign up online myself? ",
      faq_content:
        "Ledger Book isn't a self-install app. Request a demo below and our team will visit your shop to set everything up, install it on your desktop or tablet, and get your records in for you.",
    },

  ];

  return (
    <div>
      <div id="faq" class="faq_parent parent">
        <div class="faq_cont cont">
          <h1>FAQs</h1>
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
