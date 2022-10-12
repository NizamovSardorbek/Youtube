import React from "react";
import { WrapAdd } from "./YoutubeStyle";
import { BiCameraMovie } from "react-icons/bi";
const YoutubeAdd = () => {
  return (
    <WrapAdd>
      <button>
        Add Movies
        <i>
          <BiCameraMovie />
        </i>
      </button>
    </WrapAdd>
  );
};

export default YoutubeAdd;
