import React from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Layout() {
   const redirect = useNavigate();
   return (
      <>
         <header className="header">
            <nav>
               <NavLink>RegTest</NavLink>

               <button className="user" onClick={()=>{
                  redirect("/sign-up");
               }}>
                  <Icon />
               </button>
            </nav>
         </header>
         <Outlet />
      </>
   );
}

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="40px" width="40px">
      <g fill="#0F0F0F" fillRule="evenodd" clipRule="evenodd">
        <path d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12zm0-2.2c-1.657 0-3-1.477-3-3.3 0-1.823 1.343-3.3 3-3.3s3 1.477 3 3.3c0 1.823-1.343 3.3-3 3.3zM19.103 14.109a2.608 2.608 0 00-3.187-.41c-.19.113-.358.216-.512.312-.41.253-.729.449-1.139.617C13.75 14.84 13.084 15 12 15c-1.073 0-1.75-.15-2.274-.355-.462-.181-.828-.408-1.31-.707-.093-.059-.192-.12-.296-.184a2.628 2.628 0 00-3.256.388c-.38.384-.824.88-1.18 1.42C3.347 16.079 3 16.765 3 17.5V20a3 3 0 003 3h12a3 3 0 003-3v-2.5c0-.746-.355-1.44-.7-1.96a9.699 9.699 0 00-1.197-1.431zm-2.166 1.31a.608.608 0 01.75.101c.334.337.685.732.946 1.125.278.42.367.707.367.855V20a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.5c0-.145.085-.427.356-.839.254-.386.598-.777.93-1.112a.629.629 0 01.788-.09c.083.05.167.103.253.157.482.301 1.022.638 1.671.892.795.31 1.726.492 3.002.492 1.3 0 2.231-.195 3.025-.522.576-.236 1.083-.55 1.53-.827.133-.082.26-.16.382-.232z"></path>
      </g>
    </svg>
  );
};