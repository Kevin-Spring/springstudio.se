import React, { useEffect, useRef } from "react";
import { IoTriangleOutline } from "react-icons/io5";
import { useLocation } from "react-router";

/* Component for the navigation arrow on bottom of page */
export const AngleDown = () => {
  const location = useLocation();

  const angle = useRef(null);

  return (
    <>
      {/* Checks to see what page user is on and adds css-classes there after */}
      <div
        ref={angle}
        className={
          location.pathname === "/studios"
            ? "angle angle-down dark"
            : "angle angle-down"
        }
      >
        <IoTriangleOutline />
      </div>
    </>
  );
};
