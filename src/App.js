import React from "react";
import { Button } from "./Button";
import { GoBell } from "react-icons/go";

export const App = () => {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button danger>See Deal!</Button>
      </div>
    </div>
  );
};
