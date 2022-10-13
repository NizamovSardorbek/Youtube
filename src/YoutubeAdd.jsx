import React, { useContext, useState } from "react";
import { InputAdd, WrapAdd } from "./YoutubeStyle";
import { BiCameraMovie } from "react-icons/bi";
import { IoAddCircle } from "react-icons/io5";
import { Oylik } from "./TableContext";
import photos from "./assets/Frozen.jpeg";
const YoutubeAdd = () => {
  const [openInput, setOpenInput] = useState(false);

  const [state, setState] = useContext(Oylik);
  const [inputvalue, setInputvalue] = useState("");
  const newOpen = () => {
    setOpenInput(!openInput);
  };
  const onAdd = () => {
    if (inputvalue.length > 0) {
      let data = [...state, { name: inputvalue, images: photos }];
      setState(data);
      setInputvalue("");
    }
  };
  return (
    <WrapAdd>
      {openInput ? (
        <>
          <InputAdd
            placeholder="Write the name of the movie"
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
            type="text"
          />
          <button onClick={onAdd}>
            Add Movies
            <i>
              <BiCameraMovie />
            </i>
          </button>
        </>
      ) : (
        <button onClick={newOpen}>
          Add
          <i>
            <IoAddCircle />
          </i>
        </button>
      )}
    </WrapAdd>
  );
};

export default YoutubeAdd;
