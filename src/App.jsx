import React, { Component, useState } from "react";

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCcAmex } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
// Images
import heroImg from "./assets/jeans.jpg";
import shoppinItemImg1 from "./assets/jeans1.jpg";
import shoppinItemImg2 from "./assets/jeans2.jpg";
import shoppinItemImg3 from "./assets/jeans3.jpg";
import shoppinItemImg4 from "./assets/jeans4.jpg";

// Components
import Footer from "./components/footer";

const App = () => {
  const items = [
    {
      name: "Shirts",
      href: "#",
      active: false,
    },
    {
      name: "Dresses",
      href: "#",
      active: false,
    },
    {
      name: "Jeans",
      href: "#",
      drop: true,
      active: true,
    },
    {
      name: "Jackets",
      href: "#",
      active: false,
    },
    {
      name: "Gymwear",
      href: "#",
      active: false,
    },
    {
      name: "Blazers",
      href: "#",
      active: false,
    },
    {
      name: "Shoes",
      href: "#",
      active: false,
    },
  ];
  const [active, setActive] = useState(items);

  function checkActive(index) {
    setActive((c) => c.map((obj, i) => ({ ...obj, active: i === index })));
  }

  const moreInfoItems = [
    {
      name: "Contact",
      href: "#",
      active: false,
    },
    {
      name: "Newsletter",
      href: "#",
      active: false,
    },
    {
      name: "Subscribe",
      href: "#",
      active: false,
    },
  ];

  const [moreInfo, setMoreInfo] = useState(moreInfoItems);

  const moreInfoFunc = (i) => {
    setMoreInfo((m) => m.map((e, index) => ({ ...e, active: i === index })));
  };

  const subItems = [
    {
      name: "Skinny",
      href: "#",
      active: true,
      isActive: <IoMdArrowDropright />,
    },
    {
      name: "Relaxed",
      href: "#",
      active: false,
      isActive: <IoMdArrowDropright />,
    },
    {
      name: "Bootcut",
      href: "#",
      active: false,
      isActive: <IoMdArrowDropright />,
    },
    {
      name: "Straight",
      href: "#",
      active: false,
      isActive: <IoMdArrowDropright />,
    },
  ];

  const [subItem, setSubItem] = useState(subItems);

  const subItemsFunc = (e) => {
    setSubItem((d) => d.map((obj, index) => ({ ...obj, active: e === index })));
  };

  const shoppingItems = [
    {
      img: shoppinItemImg1,
      headline: "Ripped Skinny Jeans",
      price: "$24.99",
      onSale: false,
      isNew: false,
    },
    {
      img: shoppinItemImg2,
      headline: "Mega Ripped Jeans",
      price: "$19.99",
      onSale: false,
      isNew: "New",
    },
    {
      img: shoppinItemImg3,
      headline: "Washed Skinny Jeans",
      price: "$20.50",
      onSale: false,
      isNew: false,
    },
    {
      img: shoppinItemImg4,
      headline: "Vintage Skinny Jeans",
      price: "$14.99",
      onSale: false,
      isNew: false,
    },
    {
      img: shoppinItemImg2,
      headline: "Mega Ripped Jeans",
      price: "$19.99",
      onSale: false,
      isNew: false,
    },
    {
      img: shoppinItemImg3,
      headline: "Washed Skinny Jeans",
      price: "$20.50",
      onSale: false,
      isNew: false,
    },
    {
      img: shoppinItemImg4,
      headline: "Vintage Skinny Jeans",
      price: "$14.99",
      onSale: "Sale",
      isNew: false,
    },
    {
      img: shoppinItemImg1,
      headline: "Ripped Skinny Jeans",
      price: "$24.99",
      onSale: false,
      isNew: false,
    },
  ];

  const aboutItems = [
    "About us",
    "We're hiring",
    `Support`,
    `Find Store`,
    `Shipment`,
    `Payment`,
    `Gift Card`,
    `Return`,
    `Help`,
  ];

  const aboutSec = [
    {
      Store: [
        {
          icon: <FaLocationDot />,
          Name: "Company Name",
        },
        {
          icon: <FaPhoneAlt />,
          Name: "0044123123",
        },
        {
          icon: <MdEmail />,
          Name: "ex@mail.com",
        },
      ],
      Accept: [
        {
          icon: <FaCcAmex />,
          Name: "Amex",
        },
        {
          icon: <BsCreditCard2FrontFill />,
          Name: "Credit Card",
        },
      ],
      SocialIcons: [
        <FaFacebook />,
        <FaInstagram />,
        <FaSnapchat />,
        <FaPinterest />,
        <FaSquareXTwitter />,
        <FaLinkedin />,
      ],
    },
  ];

  return (
    <>
      <div className=" flex relative  gap-5 max-w-7xl mx-auto items-baseline mt-6  pt-4 rounded-md ">
        <div className="fixed z-10  top-0 pt-10 hidden bg-white h-screen  flex-col gap-10   w-64 laptop:flex">
          <h1 className="tracking-widest px-4 font-semibold text-2xl">LOGO</h1>
          <div className="items  text-gray-500 flex flex-col font-bold text-lg">
            {active.map((m, i) => (
              <a key={i} href={m.href}>
                <span
                  className={
                    m.active
                      ? "text-black px-4 py-2 bg-gray-300 inline-block min-w-full"
                      : "px-4 py-2 hover:bg-gray-300 hover:text-black inline-block min-w-full"
                  }
                  onClick={() => checkActive(i)}
                >
                  {m.name}
                </span>
                <div className="flex flex-col pl-8">
                  {m.drop &&
                    subItem.map((e, i) => (
                      <a
                        key={i}
                        className={
                          e.active
                            ? "bg-gray-100 px-3 hover:bg-gray-300 hover:text-black m-1 py-1 flex items-center gap-2"
                            : "px-3 py-1 m-1 hover:bg-gray-300 hover:text-black"
                        }
                        onClick={() => subItemsFunc(i)}
                      >
                        {e.active && e.isActive}
                        {e.name}
                      </a>
                    ))}
                </div>
              </a>
            ))}
          </div>
          <div className="moreInfo flex flex-col">
            {moreInfo.map((e, i) => (
              <a
                key={i}
                className={
                  e.active
                    ? "px-4 py-2 bg-gray-300 text-black inline-block min-w-full"
                    : "px-4 py-2 hover:bg-gray-300 hover:text-black inline-block min-w-full"
                }
                href={e.href}
                onClick={() => moreInfoFunc(i)}
              >
                {e.name}
              </a>
            ))}
          </div>
        </div>
        <div className=" flex-1 transition-all ease-in duration-200 ml-0 w-full laptop:ml-64 ">
          <div className="flex px-2 justify-between text-2xl">
            <h2 className="">Jeans</h2>
            <div className="flex gap-4">
              <FaShoppingCart />
              <FaSearch />
            </div>
          </div>
          <div className="hero px-2 mt-8 relative">
            <img src={heroImg} alt="" />
            <div className="absolute top-10 left-10 tracking-widest text-white flex flex-col gap-6 items-baseline">
              <h1 className="text-6xl">New Arrivals</h1>
              <h3 className="text-4xl font-normals">Collection 2017</h3>
              <button className="px-6 py-3 bg-black hover:bg-gray-300 hover:text-black ">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="shoppingItems px-2">
            <div className="text-gray-400 py-4">
              {shoppingItems.length} Items
            </div>
            <div className="cards grid grid-cols-2 laptop:grid-cols-4 gap-x-8 gap-y-5 pb-4">
              {shoppingItems.map((item, index) => (
                <div
                  className="flex group flex-col gap-2 items-baseline relative"
                  key={index}
                >
                  <img src={item.img} className="grayscale-70" alt="" />
                  <h3>{item.headline}</h3>
                  <h3
                    className={
                      item.onSale ? "font-bold text-red-500" : "font-bold"
                    }
                  >
                    {item.price}
                  </h3>

                  <span className="text-white bg-black px-3 absolute top-0">
                    {item.isNew}
                    {item.onSale}
                  </span>

                  {(item.isNew || item.onSale) && (
                    <button className="bg-black text-white px-6 py-2  items-center gap-2 hover:bg-gray-300 hover:text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap hidden group-hover:flex">
                      Buy Now <FaShoppingCart />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="subscribe flex flex-col gap-4  bg-black text-white px-4 py-8 ">
            <h2 className="text-4xl">Subscribe</h2>
            <p>To get special offers and VIP treatment:</p>
            <form action="" className="flex gap-4 flex-col items-start">
              <input
                className=" w-full py-2 px-4 text-black placeholder:text-gray-600"
                type="email"
                placeholder="Enter E-mail"
              />
              <input
                type="button"
                className="bg-red-600 py-2 px-4 cursor-pointer hover:bg-gray-300 hover:text-black"
                value="Subscribe"
              />
            </form>
          </div>

          <div className="contact-sec grid sm:grid-flow-col py-16 gap-5 sm:gap-0 bg-neutral-100">
            <div className="form  flex flex-col gap-3 text-center ">
              <h3 className="text-xl">Contact</h3>
              <p>Questions? Go ahead.</p>
              <form action="" className="flex flex-col gap-3  px-4">
                <input
                  className="p-2 border border-neutral-300"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="p-2 border border-neutral-300"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="p-2 border border-neutral-300"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="p-2 border border-neutral-300"
                  type="text"
                  placeholder="Message"
                />
                <input
                  className="px-4 py-2 bg-black text-white hover:bg-gray-300 hover:text-black cursor-pointer"
                  type="button"
                  defaultValue="Send"
                />
              </form>
            </div>
            <div className="about px-4 sm:px-0 sm:text-center">
              <h3 className="text-xl">About Us</h3>
              <div className="flex flex-col items-start sm:items-center gap-1 underline pt-4">
                {aboutItems.map((item, i) => (
                  <a href="#" key={i}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="store  px-4 sm:px-0">
              <h3 className="text-xl">Store</h3>
              <div className="py-4">
                {aboutSec.map((item, indexAbout) => (
                  <div key={indexAbout}>
                    {item.Store.map((acceptItem, innerIndex) => {
                      return (
                        <div
                          key={innerIndex}
                          className="flex items-center gap-2"
                        >
                          {acceptItem.icon}
                          {acceptItem.Name}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <h3 className="text-xl">We accept</h3>
              <div>
                {aboutSec.map((item, outerIndex) => (
                  <div key={outerIndex} className="py-4">
                    {item.Accept.map((acceptItem, innerIndex) => (
                      <div key={innerIndex} className="flex items-center gap-2">
                        {acceptItem.icon}
                        {acceptItem.Name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="socialIcons">
                <div className="flex items-center gap-1 text-2xl ">
                  {aboutSec.map((item, outerIndex) =>
                    item.SocialIcons.map((item, innerIndex) => (
                      <a href="#" className="cursor-pointer ">
                        {item}
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
