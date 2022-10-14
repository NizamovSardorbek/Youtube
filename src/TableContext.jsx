import React, { createContext, useReducer, useState } from "react";
import { Mock } from "./Mock";
import { TableData } from "./YoutubeStyle";

export const Oylik = createContext();

const TableContext = ({ children }) => {
  const [state, setState] = useReducer((state, action) => {
    switch (action.type) {
      case "delete":
        let res = state.filter((val) => val.id !== action.payload);
        return res;
      case "search":
        let str = state.filter((vals) => vals.name.includes(action.payload2));
        return str;
      case "adduser":
        if (action.payload3.length > 0) {
          let res2 = [
            ...state,
            { name: action.payload3, images: action.images },
          ];
          return res2;
        }
      default:
        return state;
    }
  }, Mock);
  return <Oylik.Provider value={[state, setState]}>{children}</Oylik.Provider>;
};

export default TableContext;
