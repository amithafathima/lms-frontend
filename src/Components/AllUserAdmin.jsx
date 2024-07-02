



// import React, { useState, useEffect } from 'react';
// import AdminHeader from './AdminHeader';
// import { getAllUsersAPI } from '../Services/allAPIs';
// import { Table } from 'react-bootstrap';

// function AllUserAdmin() {
//   const [AllUsers, setAllUsers] = useState([]);

//   const getAllUsers = async () => {
//     // Token authentication
//     if (sessionStorage.getItem('token')) {
//       const token = sessionStorage.getItem('token');
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + token // space after Bearer is compulsory
//       };
//       // API call
//       const result = await getAllUsersAPI(reqHeader);
//       console.log(result);
//       if (result.status === 200) {
//         setAllUsers(result.data);
//       } else {
//         // Error handling
//         console.log(result.response.data);
//       }
//     }
//   };

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   // Get the admin username from session storage
//   const adminUsername = sessionStorage.getItem('username');

//   // Filter out the admin user
//   const nonAdminUsers = AllUsers.filter(user => user.username !== adminUsername);

//   return (
//     <div>
//       <AdminHeader />
//       <br /><br /><br /><br /><br /><br />
//       <div className="container">
//         {nonAdminUsers.length > 0 ? (
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {nonAdminUsers.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         ) : (
//           "Can't fetch"
//         )}
//       </div>
//     </div>
//   );
// }

// export default AllUserAdmin;


import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import { getAllUsersAPI } from '../Services/allAPIs';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

function AllUserAdmin() {
  const [AllUsers, setAllUsers] = useState([]);

  const getAllUsers = async (req,res) => {
    // Token authentication
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token // space after Bearer is compulsory
      };
      // API call
      const result = await getAllUsersAPI(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllUsers(result.data);
      } else {
        // Error handling
        console.log(result.response.data);
      }
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Get the admin username from session storage
  const adminUsername = sessionStorage.getItem('username');

  // Filter out the admin user
  const nonAdminUsers = AllUsers.filter(uSer => uSer.username !== adminUsername);// adminUsername allathe ellam nonAdminUsers

  return (
    <div>
      <AdminHeader />
      <br /><br /><br /><br />
      <div className="container mt-5">
        {nonAdminUsers.length > 0 ? (
          <Table striped bordered hover responsive className="table-styled">
            <thead style={{backgroundColor:'#5499C7 '}}>
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {nonAdminUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center text-danger">Can't fetch users</p>
        )}
      </div>
    </div>
  );
}

export default AllUserAdmin;
