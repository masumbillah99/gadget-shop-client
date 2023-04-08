import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <Link to="/">EduThinking Model School</Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/class">Classes</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="lg:hidden">
          <button className="p-2"
          onClick={() => setMenuOpen(true)}>
            <Bars3Icon className="w-5 text-gray-600" />
          </button>
          {
            isMenuOpen && (
                <div>
                    <div>
                        <div>
                            <div>
                                <Link></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Header;
