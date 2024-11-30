import React from "react";
import { Menus, SubMenus } from "./contents";
import ListCard from "./list_card";

interface MegaMenuProps {
  menu: Menus;
}

const MegaMenu = ({ menu }: MegaMenuProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-2/6">
        <h3 className="text-xl font-bold">{menu.name}</h3>
        <p>{menu.description}</p>
      </div>

      <ul className="flex w-4/6 flex-wrap justify-start">
        {menu?.submenus?.map((submenu, index) => (
          <li className="mb-2" key={index.toString()}>
            <div className="p-4 shadow-sm" key={index.toString()}>
              <h2 className="text-lg font-bold">{submenu.title}</h2>
              <h2 className="text-sm font-light">{submenu.content}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
