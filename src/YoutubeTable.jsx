import React, { useState } from "react";
import Dates from "./YoutubeData";
import { ImgTable, NameTable, TableData, TableWrap } from "./YoutubeStyle";
const YoutubeTable = () => {
  const [data, setData] = useState(Dates);
  return (
    <TableWrap>
      {data.map((value) => (
        <TableData>
          <ImgTable src={value.url} alt="" />
          <NameTable>
            <h4>{value.name}</h4>
          </NameTable>
        </TableData>
      ))}
    </TableWrap>
  );
};

export default YoutubeTable;
