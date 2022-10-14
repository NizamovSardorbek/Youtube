import React, { useContext, useState } from "react";
import { Input, InputButton, InputWrap } from "./YoutubeStyle";
import { FcSearch } from "react-icons/fc";
import { Oylik } from "./TableContext";
const YoutubeSearch = () => {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Oylik);

  const onSearch = () => {
    dispatch({ type: "search", payload2: title });
    // setState(res);
  };
  return (
    <div>
      <InputWrap>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Search Movies"
        />
        <InputButton onClick={onSearch}>
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
