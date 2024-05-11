import React from "react";
import { Link } from "react-router-dom";

const navItem = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "Products",
    route: "/products",
  },
];

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-10 text-2xl">
        <ul className=" text-lg ">
          {navItem.map((item) => (
            <li>
              <Link to={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
