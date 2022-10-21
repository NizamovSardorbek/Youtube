import React, { useContext, useReducer, useState } from "react";
import Dates from "./YoutubeData";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAutoDelete } from "react-icons/md";
import { Oylik } from "./TableContext";
import { FcCancel } from "react-icons/fc";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  ImgTable,
  InputButton,
  NameTable,
  TableData,
  TableWrap,
} from "./YoutubeStyle";
import { Mock } from "./Mock";
const YoutubeTable = () => {
  const [data, setData] = useState(Mock);
  const [state, dispatch] = useContext(Oylik);

  const onDelete = (ids) => {
    dispatch({ type: "delete", payload: ids });
  };

  return (
    <TableWrap>
      {state.length > 0 ? (
        state.map((value, index) => (
          <TableData key={index}>
            <a href={value?.link}>
              <ImgTable src={value.images} alt="" />
            </a>
            <NameTable>
              <h4>{value.name}</h4>

              <i onClick={() => onDelete(value?.id)}>
                <MdOutlineAutoDelete />
              </i>
            </NameTable>
          </TableData>
        ))
      ) : (
        <h1>the movie you wanted didn't come out </h1>
      )}
    </TableWrap>
  );
};

export default YoutubeTable;
