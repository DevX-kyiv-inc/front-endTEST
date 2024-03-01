const BS = "localhost:8080/api/v2"
const REST = {
   getUser: `${BS}/verify`,
   setMessage: `${BS}/message`,

   // auth
   reg: `${BS}/registration`,
   log: `${BS}/login`,
};


export {REST};