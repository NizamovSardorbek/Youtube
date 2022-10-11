import React from "react";
import { Input, InputButton, InputWrap } from "./YoutubeStyle";

const YoutubeSearch = () => {
  return (
    <div>
      <InputWrap>
        <Input type="text" placeholder="Search Movies" />
        <InputButton>Search</InputButton>
      </InputWrap>
    </div>
  );
};

export default YoutubeSearch;
