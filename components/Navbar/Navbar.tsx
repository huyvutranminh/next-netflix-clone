import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "../NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import { NAV_TITLES } from "../MobileMenu/MobileMenu";
import AccountMenu from "../AccountMenu";
import classNames from "classnames";

const TOP_OFFSET = 66;

export const Navbar = () => {
  const [mobileVisibility, setMobileVisibility] = useState(false);
  const [accountMenuVisibility, setAccountMenuVisibility] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileVisibility((state) => !state);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={classNames(
          "px-4 md:px-16 py-6 flex flex-row items-center transition duration-500",
          {
            "bg-zinc-900/90": showBackground,
          }
        )}
      >
        <img className="h-4 lg:h-7" alt="Logo" src="/images/logo.png"></img>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {Object.values(NAV_TITLES).map((title) => (
            <NavbarItem key={title} label={title} />
          ))}
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              accountMenuVisibility ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={mobileVisibility} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={() => setAccountMenuVisibility((state) => !state)}
            className="flex flex-row gap-2 items-center cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-green.png" alt="logo" />
            </div>
            <BsChevronDown
              className={classNames("text-white transition rotate-0", {
                "rotate-180": accountMenuVisibility,
              })}
            />
            <AccountMenu visible={accountMenuVisibility} />
          </div>
        </div>
      </div>
    </nav>
  );
};
