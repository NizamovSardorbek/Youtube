import React from "react";
import TableContext from "./TableContext";
import YoutubeAdd from "./YoutubeAdd";
import YoutubeNavbar from "./YoutubeNavbar";
import YoutubeSearch from "./YoutubeSearch";
import YoutubeTable from "./YoutubeTable";

const Rootyoutube = () => {
  return (
    <div>
      <TableContext>
        <YoutubeNavbar />
        <YoutubeSearch />
        <YoutubeAdd />
        <YoutubeTable />
      </TableContext>
    </div>
  );
};

export default Rootyoutube;
