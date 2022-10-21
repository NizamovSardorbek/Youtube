import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CartoonMovies from "./Cartoon/Cartoon";
import MoviesYoutube from "./Movies/Movies";
import SerialYoutube from "./Serial/Serials";
import SportYoutube from "./Sports/SportYoutube";
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

        <Switch>
          <Route path={"/movie"}>
            <MoviesYoutube />
          </Route>
          <Route path={"/serial"}>
            <SerialYoutube />
          </Route>
          <Route path={"/cartoon"}>
            <CartoonMovies />
          </Route>
          <Route path={"/sport"}>
            <SportYoutube />
          </Route>
          <Route path={"/allmovie"}>
            <YoutubeTable />
          </Route>
          <Route path={"/"}>
            <Redirect to={"/allmovie"} />
          </Route>
        </Switch>
      </TableContext>
    </div>
  );
};

export default Rootyoutube;
