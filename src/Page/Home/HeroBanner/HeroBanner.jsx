import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Component/Hook/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../Component/contentWrapper/ContentWrapper";
import Img from "../../../Component/LazyLoading/Img";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =url.backdrops + data?.data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);


  
  useEffect(()=>{  
  },[data]);


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading &&
        <div className="backdrop_img">
       <Img src={background}/>

      </div>
      }
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of Movies,Tv shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies and tv shows"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
              />
            <button>Search</button>
              </div>
          </div>
      </div>
      </ContentWrapper>
      
    </div>
  );
};

export default HeroBanner;
