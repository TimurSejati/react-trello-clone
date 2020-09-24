import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/nav/Navigation";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState("salmon");
  return (
    <div
      style={{
        backgroundColor: backgroundImage,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navigation setBackgroundImage={setBackgroundImage} />
      <Wrapper />
    </div>
  );
}
