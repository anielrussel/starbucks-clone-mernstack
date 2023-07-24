import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const [toggleArrow, setToggleArrow] = useState(false);

  const handleToggleArrow = () => {
    setToggleArrow((prev) => !prev);
  };
  return (
    <footer className="px-6 md:px-32 py-8 border-t border-gray-300 font-sans">
      {/* links */}
      <div className="border-b border-gray-300 pb-6">
        <div className="block md:hidden">
          <Accordion>
            <AccordionItem>
              <AccordionHeader
                className="flex items-center justify-between w-full pb-3"
                onClick={handleToggleArrow}
              >
                <h3 className={`accordion-title font-semibold text-lg`}>
                  About Us
                </h3>
                {toggleArrow ? (
                  <IoIosArrowUp size={25} />
                ) : (
                  <IoIosArrowDown size={25} />
                )}
              </AccordionHeader>

              <AccordionBody>
                <div className="flex flex-col gap-2 text-md pb-10">
                  <Link to={"about-us"} className="accordion-body">
                    Our Company
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Stories and News
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Customer Service
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Careers
                  </Link>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                className="flex items-center justify-between w-full pb-3"
                onClick={handleToggleArrow}
              >
                <h3 className={`accordion-title font-semibold text-lg`}>
                  Order Online
                </h3>
                {toggleArrow ? (
                  <IoIosArrowUp size={25} />
                ) : (
                  <IoIosArrowDown size={25} />
                )}
              </AccordionHeader>

              <AccordionBody>
                <div className="flex flex-col gap-2 text-md pb-10">
                  <Link to={"about-us"} className="accordion-body">
                    Order in the App
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Delivery
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Send eGifts
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Grab Partnership
                  </Link>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                className="flex items-center justify-between w-full pb-3"
                onClick={handleToggleArrow}
              >
                <h3 className={`accordion-title font-semibold text-lg`}>
                  Rewards
                </h3>
                {toggleArrow ? (
                  <IoIosArrowUp size={25} />
                ) : (
                  <IoIosArrowDown size={25} />
                )}
              </AccordionHeader>

              <AccordionBody>
                <div className="flex flex-col gap-2 text-md pb-10">
                  <Link to={"about-us"} className="accordion-body">
                    Account
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    View Transactions
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    Reload
                  </Link>
                  <Link to={"about-us"} className="accordion-body">
                    FAQs
                  </Link>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>

        {/* desktop view */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 font-semibold text-lg">
          <div className="hidden md:flex flex-col gap-4">
            <Link to={"/about-us"} className="text-xl">
              About Us
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Our Company
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Stories and News
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Customer Service
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Careers
            </Link>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <Link to={"/order-online"} className="text-xl">
              Order Online
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Order in the App
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Delivery
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Send eGifts
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Grab Partnership
            </Link>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <Link to={"/rewards"} className="text-xl">
              Rewards
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Account
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              View Transactions
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Reload
            </Link>
            <Link
              to={"about-us"}
              className="accordion-body text-[16px] font-medium text-gray-600 hover:text-black"
            >
              FAQs
            </Link>
          </div>
          <Link to={"/social-impact"} className="text-xl">
            Social Impact
          </Link>
          <Link to={"/promotions"} className="text-xl">
            Promotions
          </Link>
          <h1 className="hidden md:flex rotate-[270deg] items-end font-extrabold text-2xl h-34 -mt-10">
            STARBUCKS®
          </h1>
        </div>
        {/* desktop view */}
      </div>

      {/* social media */}
      <div className="pt-8 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <FaFacebook
            size={34}
            className="bg-black text-white p-[6px] rounded-full hover:-translate-y-2 ease-in-out duration-200"
          />
          <FaTwitter
            size={34}
            className="bg-black text-white p-[6px] rounded-full hover:-translate-y-2 ease-in-out duration-200"
          />
          <FaInstagram
            size={34}
            className="bg-black text-white p-[6px] rounded-full hover:-translate-y-2 ease-in-out duration-200"
          />
          <FaYoutube
            size={34}
            className="bg-black text-white p-[6px] rounded-full hover:-translate-y-2 ease-in-out duration-200"
          />
        </div>
        <div className="flex md:flex-row md:gap-6 flex-col gap-3 font-medium textlg">
          <Link to={"web-accessibility"} className="hover:text-green-700">
            Web Accessibility
          </Link>
          <Link to={"web-accessibility"} className="hover:text-green-700">
            Privacy of Policy
          </Link>
          <Link to={"web-accessibility"} className="hover:text-green-700">
            terms of Use
          </Link>
          <Link to={"web-accessibility"} className="hover:text-green-700">
            Site Map
          </Link>
          <Link to={"web-accessibility"} className="hover:text-green-700">
            Cookie Preferences
          </Link>
        </div>
      </div>
      <p className="text-sm pt-6">
        &copy; This is just a clone, all credits to{" "}
        <Link to={"https://starbucks.ph/home"}>Starbucks.ph</Link>
      </p>
    </footer>
  );
};

export default Footer;
