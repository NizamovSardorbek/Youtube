import React from "react";
import { Input, InputButton, InputWrap } from "./YoutubeStyle";
import { FcSearch } from "react-icons/fc";
const YoutubeSearch = () => {
  return (
    <div>
      <InputWrap>
        <Input type="text" placeholder="Search Movies" />
        <InputButton>
          Search
          <i>
            <FcSearch />
          </i>
        </InputButton>
      </InputWrap>
    </div>
  );
};

export default YoutubeSearch;
