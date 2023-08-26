import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core";

export const NavComponent: React.FC = () => {
  return (
    <>
      <div className="nav-div">
        <ul>
          <li>
            <Link to={routes.puppies}>Puppies</Link>
          </li>
          <li>
            <Link to={routes.kitties}>Kitties</Link>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
};
