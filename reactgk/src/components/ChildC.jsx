// import React from "react";
// import { data, data1, data2, data3, } from "./Parent";

// function ChildC() {
//   return (
//     <div>
//       <data.Consumer>
//         {(name) => {
//          return (
//             <data1.Consumer>
//               {(age) =>{
//               return (
//                  <data2.Consumer>
//                    {(location) =>{
//                    return (
//                       <data3.Consumer>
//                         {(pincode) =>{
//                         return(
//                           <h1> 
//                            My name is{name} and i am {age} Years old.im from {""} 
//                            {location}, Pincode:{pincode}.
//                           </h1>
//                            );
//                         }}
//                       </data3.Consumer>
//                    );
//               }}
//             </data2.Consumer>
//           );
//         }}
//       </data1.Consumer>
//     );
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default ChildC;


import React, { useContext } from 'react'
import { data, data1, data2, data3} from "./Parent";

function ChildC() {
   const name = useContext(data);
   const age = useContext(data1);
   const location = useContext(data2);
   const pincode = useContext(data3);

  return (
    <div>
      <h1>
        My name is <span style={{ color: "red" }}>{name}</span>
        and i am{""} <span style={{ color: "orange" }}>{age}</span>
        Years old.im from <span style={{ color: "green" }}>{location}</span>,<br/>
        Pincode:<span style={{color:"blue"}}>{pincode}</span>.
      </h1>
    </div>
  );
}

export default ChildC;
