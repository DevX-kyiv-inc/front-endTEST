import React, { useState, useContext } from "react";

import { NavLink } from "react-router-dom";

import "./Registration.scss";
import { REST } from "../env/config";
import { UserContext } from "../env/UserContext";

export default function Registration() {
   // context
   const provideUser = useContext(UserContext);

   const [response, setResponse] = useState("");

   const [image, setImage] = useState(null);
   const formData = new FormData();
   formData.append("image", image);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   formData.append("user", JSON.stringify({ name, email, password }));

   function submit(e) {
      e.preventDefault();
      setResponse("waiting");
      (async () => {
         const res = await fetch(REST.reg, { method: "POST", body: formData });
         const {status} = res;
         console.log(status);
         if (String(status)[0] === "2") {
            setResponse("success");
            const token = await res.text();
            provideUser.setToken(token);
         } else {
            setResponse("fail");
         }
      })();
   }
   return (
      <div className="overlay">
         <form className="reg" onSubmit={submit}>
            <div className="back">
               <NavLink to="/">Back</NavLink>
            </div>
            <label className="photo">
               <p>insert photo</p>
               <input
                  type="file"
                  onChange={({ target }) => {
                     const fileX = target.files[0];
                     fileX && setImage(fileX);
                  }}
                  hidden
               />
            </label>
            <TextInput type="name" val={name} set={setName} />
            <TextInput type="email" val={email} set={setEmail} />
            <TextInput type="password" val={password} set={setPassword} />
            {response || <button>submit</button>}
            {/* {response && <p>{response}</p>} */}
         </form>
      </div>
   );
}

function TextInput({ type, val, set }) {
   return (
      <input
         type={type}
         placeholder={type}
         value={val}
         onChange={({ target }) => set(target.value)}
      />
   );
}
