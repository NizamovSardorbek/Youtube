import React, { createContext, useState } from "react";
import { Mock } from "./Mock";
import { TableData } from "./YoutubeStyle";

export const Oylik = createContext();

const TableContext = ({ children }) => {
  const [state, setState] = useState(Mock);
  return (
    <Oylik.Provider value={[state, setState]}>{children}</Oylik.Provider>
  );
};

export default TableContext;
