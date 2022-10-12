import React, { useState } from "react";
import Dates from "./YoutubeData";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAutoDelete } from "react-icons/md";
import {
  ImgTable,
  InputButton,
  NameTable,
  TableData,
  TableWrap,
} from "./YoutubeStyle";
const YoutubeTable = () => {
  const [data, setData] = useState(Dates);
  return (
    <TableWrap>
      {data.map((value) => (
        <TableData>
          <ImgTable src={value.url} alt="" />
          <NameTable>
            <h4>{value.name}</h4>
            <i>
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
