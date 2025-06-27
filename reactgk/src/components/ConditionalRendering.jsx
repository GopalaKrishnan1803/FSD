import React from "react";

 function ConditionalRendering(props) {
    // if....else
    const login = props.letMeCheack;

    if (login) {
        return <h1> Welcome Back!</h1>;
    } else {
        return <h1>Please Login</h1>;
    }    
    
  return (
    <div>
        <h2>Conditional Rendering</h2>
    </div>
  );


// Storing element in a variable---------------------

// const isLoggedIn = this.props.isLoggedIn;
// let message;

// if (is isLoggedIn) {
//   message = <h1>Welcome Back!</h1>
// }else {
//   message = <h1> Pleace Login</h1>
// --------------------------------------------------------------------



// const unreadMessages=props.unreadMessages;

// return(
//   <div> 
//     <h1>Hello</h1>
//     {unreadMessages.length > 2 && (
//       <h2>You have{unreadMessages.length} unread messages.</h2>
//     )}
//   </div>
// );

// ----------------------------------------------------------------------------------



// const isLoggedIn = props.isLoggedIn;

// return (
//   <div>{isLoggedIn ? <h1>Welcome Back!</h1>:
//     <h1>Pleace login</h1>}</div>
// );
}


export default ConditionalRendering;