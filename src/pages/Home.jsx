import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../env/UserContext";

export default function Home() {
  const {user: userData} = useContext(UserContext);
   return (
      <main>
         <Outlet></Outlet>
         <div>
            <div>{userData}</div>
            <div>{JSON.parse(userData).sub}</div>
         </div>
      </main>
   );
}

function Icon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         height="20px"
         width="20px"
      >
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12h16m-8-8v16"
         ></path>
      </svg>
   );
}
