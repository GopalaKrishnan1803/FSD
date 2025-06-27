import React from "react";

function EventsDemo() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse Entered!");
  };

  const handleMouseLeft = () => {
    console.log("Mouse Left!");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeft}
      >
        Hover or Click Me
      </button>
    </div>
  );
}

export default EventsDemo;
