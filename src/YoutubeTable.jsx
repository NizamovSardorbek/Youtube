import React, { useContext, useState } from "react";
import Dates from "./YoutubeData";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAutoDelete } from "react-icons/md";
import { Oylik } from "./TableContext";
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
  const [state, setState] = useContext(Oylik);

  const onDelete = (ids) => {
    setState(state.filter((val) => val?.id !== ids));
  };
  return (
    <TableWrap>
      {state.map((value) => (
        <TableData>
          <ImgTable src={value.images} alt="" />
          <NameTable>
            <h4>{value.name}</h4>
            <i onClick={() => onDelete(value?.id)}>
              <MdOutlineAutoDelete />
            </i>
            <i>
              <FiEdit />
            </i>
          </NameTable>
        </TableData>
      ))}
    </TableWrap>
  );
};

export default YoutubeTable;
