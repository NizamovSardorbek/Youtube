import React, { useContext, useState } from "react";
import { Nav, WrapNavbar } from "./YoutubeStyle";
import { RiYoutubeFill } from "react-icons/ri";
import Dates from "./YoutubeData";
import { Oylik } from "./TableContext";
const YoutubeNavbar = (props) => {
  const [data] = useState(Dates);
  const [count, dispatch] = useContext(Oylik);
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
        <h4>All : {count.length}</h4>
      </WrapNavbar>
    </Nav>
  );
};

export default YoutubeNavbar;
