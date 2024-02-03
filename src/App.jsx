import React, { useState } from "react";

// icons
import { IoMdArrowDropright } from "react-icons/io";

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

  const moreInfo = [
    {
      name: "Contact",
      href: "#",
    },
    {
      name: "Newsletter",
      href: "#",
    },
    {
      name: "Subscribe",
      href: "#",
    },
  ];

  const subItems = [
    {
      name: "Skinny",
      href: "#",
      isActive: <IoMdArrowDropright />,
    },
    {
      name: "Relaxed",
      href: "#",
    },
    {
      name: "Bootcut",
      href: "#",
    },
    {
      name: "Straight",
      href: "#",
    },
  ];

  const [subItem, setSubItem] = useState(subItems);

  return (
    <>
      <div className=" flex  gap-5 max-w-7xl mx-auto items-baseline mt-6 px-2 pt-4 rounded-md ">
        <div className="sticky gap-5 max-h-screen h-screen top-0   flex flex-col gap-10 left-0  w-64">
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
                    subItem.map((e) => <a className="px-3 py-1">{e.name}</a>)}
                </div>
              </a>
            ))}
          </div>
          <div className="moreInfo flex flex-col">
            {moreInfo.map((e) => (
              <a
                className="px-4 py-2 hover:bg-gray-300 hover:text-black inline-block min-w-full"
                href={e.href}
              >
                {e.name}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-slate-500 flex-1 ">
          <div>
            <h2>Jeans</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
