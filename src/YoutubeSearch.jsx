import React, { useContext, useState } from "react";
import { Input, InputButton, InputWrap } from "./YoutubeStyle";
import { FcSearch } from "react-icons/fc";
import { Oylik } from "./TableContext";
const YoutubeSearch = () => {
  const [title, setTitle] = useState("");
  const [state, setState] = useContext(Oylik);

  const onSearch = () => {
    let res = state.filter((val) =>
      val.name.toLowerCase().includes(title.toLowerCase())
    );
    setState(res);
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
