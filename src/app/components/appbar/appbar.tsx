import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import MegaMenu from "./mega_menu";
import { menus } from "./contents";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function Header() {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(
    null
  );

  const toggleHamburgerMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  };

  const handleMenuClick = (index: number) => {
    if (selectedMenuIndex != null) setSelectedMenuIndex(null);
    else {
      setSelectedMenuIndex(index);
    }
  };

  return (
    <header className="top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center shadow-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 items-center">
            <Image
              src="/logo_nav.svg"
              alt="Next.js logo"
              width={24}
              height={22}
              priority
            />
            <span className="text-2xl font-bold">MelaPay</span>
          </div>
          <ul className="hidden md:flex items-center">
            {menus.map((menu, index) => (
              <li className="group flex items-center ml-8" key={index}>
                <button
                  onClick={() => handleMenuClick(index)}
                  className="nav-link flex items-center gap-2 mr-2"
                >
                  {menu.name}
                  {menu?.submenus && (
                    <span>
                      {selectedMenuIndex === index ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          {selectedMenuIndex != null && (
            <div
              className={`${
                selectedMenuIndex != null ? "group-hover:block" : "hidden"
              } group z-50  absolute top-24 t-24 left-0 w-full shadow-md p-4 bg-white`}
            >
              {selectedMenuIndex != null && (
                <MegaMenu menu={menus[selectedMenuIndex]} />
              )}
            </div>
          )}
        </div>

        <div>
          <button>Login/Join</button>
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleHamburgerMenu}>More</button>
          </div>
        </div>
        {/* TODO: UI change when their is a session */}
      </nav>

      {/* Mobile Navigation (Simplified for brevity) */}
      {openHamburgerMenu && (
        <div className="md:hidden absolute w-full">
          {/* Mobile Nav Content */}
          <ul>
            {menus.map((menu, index) => (
              <li>
                <div className="p-4 shadow-sm">
                  <h2 className="text-lg font-bold">{menu.name}</h2>
                  <h2 className="text-sm font-light">{menu.description}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
