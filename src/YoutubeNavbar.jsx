import React, { useContext, useState } from "react";
import {
  Nav,
  WrapNavbar,
  NavLinkWrappAll,
  WrapAll,
  Icons,
  IconYoutube,
} from "./YoutubeStyle";
import { RiYoutubeFill } from "react-icons/ri";
import Dates from "./YoutubeData";
import { Oylik } from "./TableContext";
import { NavLink, useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { TiSortAlphabetically } from "react-icons/ti";
const YoutubeNavbar = (props) => {
  const [data] = useState(Dates);
  const [count, dispatch] = useContext(Oylik);
  
  const style = { color: "red", fontSize: 20, textDecoration: "none" };
  const Location = useHistory();

  const getFilter = () => {};

  return (
    <Nav>
      <IconYoutube>
        <RiYoutubeFill />
      </IconYoutube>
      <h3>YouTube</h3>
      <Icons onClick={() => Location.goBack()}>
        <RiArrowGoBackFill />{" "}
      </Icons>
      <WrapNavbar>
        <WrapAll
          // onClick={() => dispatch({ movie: "movie" })}
          activeStyle={style}
          to={"/movie"}
        >
          Movies
        </WrapAll>
        <WrapAll
          // onClick={() => dispatch({ type: "serial", status: count.status })}
          activeStyle={style}
          to={"/serial"}
        >
          Serials
        </WrapAll>
        <WrapAll
          // onClick={() => dispatch({ movie: "cartoon" })}
          activeStyle={style}
          to={"/cartoon"}
        >
          Cartoons
        </WrapAll>
        <WrapAll
          // onClick={() => dispatch({ movie: "sport" })}
          activeStyle={style}
          to={"/sport"}
        >
          Sports
        </WrapAll>
        <WrapAll activeStyle={style} to={"/allmovie"}>
          All : {count.length}
        </WrapAll>
      </WrapNavbar>
      <Icons onClick={() => Location.goForward()}>
        <RiArrowGoForwardFill />
      </Icons>
      <Icons onClick={() => Location.push("/allmovie")}>
        <TiSortAlphabetically />
      </Icons>
    </Nav>
  );
};

export default YoutubeNavbar;
