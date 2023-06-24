import React, { useState } from "react";
import "./Trending.scss";
import SwitchTabs from "../../../Component/SwitchTabs/SwitchTabs";
import ContentWrapper from "../../../Component/contentWrapper/ContentWrapper";
import useFetch from "../../../Component/Hook/useFetch";
import Carousel from "../../../Component/carousel/Carousel";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tabs) => {
    setEndpoint(tabs === "Day" ? "day" : "week");
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Trending</span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.data.results} loading={loading}/>
      </div>
    </>
  );
};

export default Trending;
