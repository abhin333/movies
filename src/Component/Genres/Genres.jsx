import React from "react";
import "./Genres.scss";
import { useSelector } from "react-redux";
const Genres = ({ data }) => {
    console.log("datata",data);
  const genres = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres.genres[g]?.name) return;
        return <div key={g} className="genre">{genres.genres[g]?.name}</div>;
      })}
    </div>
  );
};

export default Genres;
