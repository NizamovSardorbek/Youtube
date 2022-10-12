import React, { useState } from "react";
import { Nav, WrapNavbar } from "./YoutubeStyle";
import { RiYoutubeFill } from "react-icons/ri";
import Dates from "./YoutubeData";
const YoutubeNavbar = () => {
  const [data] = useState(Dates)
  return (
    <Nav>
      
      <i>
        <RiYoutubeFill />
      </i>
      <h3>YouTube</h3>
      <WrapNavbar>
        <h4>Movies</h4>
        <h4>Serials</h4>
        <h4>Cartoons</h4>
        <h4>Sports</h4>
        <h4>All  : {data.length}</h4>
      </WrapNavbar>
    </Nav>
  );
};

export default YoutubeNavbar;
