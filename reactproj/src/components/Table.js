// import React, { useEffect, useState } from "react";

// function Table() {
//   const [userlist, setuserlist] = useState([]);

//   useEffect(async (e) => {
//     const res = await fetch("/getuser", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = await res.json();
//     setuserlist(result.data);
//   },);
//   const userdata = userlist.map((obj) => {
//     return (
//       <tr>
//         <td>{obj.name}</td>
//         <td>{obj.username}</td>
//         <td>{obj.password}</td>
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <h1>USERLIST</h1>
//       <table className="table table-dark table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>{userdata}</tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Userlist() {
  const [userlist, setuserlist] = useState([]);

  useEffect(() => {
    axios
      .get("/getuser")
      .then((res) => {
        console.log(res);
        setuserlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userlist);
  const userdata = userlist.map((obj) => {
    return (
      <tr>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
        <td>{obj.pwsd}</td>
        <td>{obj.cpwsd}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>USERLIST</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Confirm Password</th>
          </tr>
        </thead>
        <tbody>{userdata}</tbody>
      </table>
    </div>
  );
}

export default Userlist;
