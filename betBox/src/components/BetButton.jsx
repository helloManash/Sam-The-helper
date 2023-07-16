import React from "react";
const buttonDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
    />
  </svg>
);

const buttonUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
    />
  </svg>
);
function BetButton({ direction , betDirection,setBetDirection}) {
  return (
    <>
      {direction == "down" ? (
        <button onClick={() =>{setBetDirection("down")}}className={"transition-all duration-300 rounded-full p-10 " + (betDirection !=="down"? "bg-gray-200": "bg-red-500")}>
          {buttonDown}
        </button>
      ) : (
        <button onClick={() =>{setBetDirection("up")}} className={"rounded-full p-10 " + (betDirection !=="up"? "bg-gray-200":"bg-green-500")}>
          {buttonUp}
        </button>
      )}
    </>
  );
}
export default BetButton;
