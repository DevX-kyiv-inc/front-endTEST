import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import SignUP from "./pages/auth/SignUP";

// import DevTest from "./pages/dev-test/DevTest";
import Registration from "./pages/Registration";
import { UserContext } from "./env/UserContext";

import Layout from "./Layout";
import Home from "./pages/Home";
import { useMemo } from "react";

import { REST } from "./env/config";

function Router() {
   const [token, setToken] = useState(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInN1YiI6ImFjaGVyb24xMjExMjMiLCJpYXQiOjE3MDkxNDUwMjksImV4cCI6MTczMzMzNzAyOX0.gwvNGWF7AhwTyHt6FceAzZLzTRg3eFq0nAW6r9_JZwFykEl9GJqtR7N0iovPPg4hRYP6J2ymZMXIi47cbTfCPg"
   );

   const user = useMemo(() => {
      // const token =
      //    "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInN1YiI6ImFjaGVyb24xMjExMjMiLCJpYXQiOjE3MDkxNDUwMjksImV4cCI6MTczMzMzNzAyOX0.gwvNGWF7AhwTyHt6FceAzZLzTRg3eFq0nAW6r9_JZwFykEl9GJqtR7N0iovPPg4hRYP6J2ymZMXIi47cbTfCPg";
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return atob(base64);
   }, [token]);

   const provideUser = { user, setToken };

   // useEffect(() => {
   //    setToken();
   // });
   return (
      <UserContext.Provider value={provideUser}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />}>
                     <Route path="/sign-up" element={<Registration />} />
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </UserContext.Provider>
   );
}

export default Router;
