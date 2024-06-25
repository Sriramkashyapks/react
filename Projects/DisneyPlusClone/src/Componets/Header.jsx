// This file keeps the content of header 

import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
    // menu on the header part
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center gap-8 justify-between p-5">
        {/* Disney + logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[100px] md:w-[155px] object-cover"
      />
      {/* This div contains the icons imported from the component HeaderItem */}
      <div className="hidden md:flex gap-8">
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
      </div>
      {/* this div is to make the website responsive, as the screen ratio is decreased vertical hamburger dots will appear */}
      <div className="flex md:hidden gap-5">
        {menu.map(
          (item, index) =>
            index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
        )}
        {/* The vertical dots */}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem key="toggle" name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      {/* image appearing as the profile logo */}
      <img
        src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg"
        alt="profile"
        className="w-[40px] rounded-full ml-auto"
      />
    </div>
  );
};

export default Header;