import React from "react";

import category from "../../images/menu-icons/category.svg"
import categoryOn from "../../images/menu-icons/category-on.svg"
import heart from "../../images/menu-icons/heart.svg"
import heartOn from "../../images/menu-icons/heart-on.svg"
import fire from "../../images/menu-icons/fire.svg"
import fireOn from "../../images/menu-icons/fire-on.svg"
import search from "../../images/menu-icons/search.svg"
import searchOn from "../../images/menu-icons/search-on.svg"

const MenuMobile = () => {

  return (
    <>
      <nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand foo" href="#">
          <img src={category} alt="" className=""/>
          <img src={categoryOn} alt="" className=""/>
        </a>
        <a class="navbar-brand foo" href="#">
          <img src={heart} alt=""className=""/>
          <img src={heartOn} alt=""className=""/>
        </a>
        <a class="navbar-brand foo" href="#">
          <img src={fire} alt="" className=""/>
          <img src={fireOn} alt="" className=""/>
        </a>
        <a class="navbar-brand foo" href="#">
          <img src={search} alt="" className=""/>
          <img src={searchOn} alt="" className=""/>
        </a>
      </nav>
    </>
  );
};

export default MenuMobile;
