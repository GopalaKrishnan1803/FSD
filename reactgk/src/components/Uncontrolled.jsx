import React from 'react'
import useRef from 'react'
const Uncontrolled = () => {
    const nameRef = React.useRef((null));
    const emailRef = React.useRef((null));
    const passwordRef = React.useRef ((null));
    const handleSubmit = (event) => {
        console.log("name:",nameRef.current.value);
        console.log("email:",emailRef.current.value);
        console.log("password:",passwordRef.current.value);
        event.preventDefault();
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameRef} name="name" />
            </label>
            <br />
           <lable>
                Email:
                <input type="email" ref={emailRef} name="email" />
            </lable>
            <br />
            <lable>
                Password:
                <input type="password" ref={passwordRef} name="password" />
            </lable>
            <br />
                <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default Uncontrolled;