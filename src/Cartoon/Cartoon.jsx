import React, { useContext, useState } from "react";
import { ImgTable, NameTable, TableData, TableWrap } from "../YoutubeStyle";
import { MdOutlineAutoDelete } from "react-icons/md";
import { CartoonMock } from "./CartoonMock";
import { Oylik } from "../TableContext";

const CartoonMovies = () => {
  const [data, setData] = useContext(Oylik);
  // const [data, setData] =useState(CartoonMock);

  const onDelete = (ids) => {
    setData(data.filter((val) => val.id !== ids));
  };

  return (
    <TableWrap>
      {data.length > 0 ? (
        data.map((value) => (
          <TableData>
            <ImgTable src={value.images} alt="" />
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

export default CartoonMovies;
