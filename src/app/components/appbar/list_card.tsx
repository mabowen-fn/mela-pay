import React from "react";
import { Menus } from "./contents";

interface ListCardProps {
  menus: Menus;
}

function ListCard({ menus }: ListCardProps) {
  return (
    <div className="p-4 shadow-sm">
      <h2 className="text-lg font-bold">{menus.name}</h2>
      <h2 className="text-sm font-light">{menus.description}</h2>
    </div>
  );
}

export default ListCard;
