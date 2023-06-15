import React, { useState } from "react";

import Carousel from "../../Component/carousel/Carousel";
import ContentWrapper from "../../Component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../Component/SwitchTabs/SwitchTabs";

import useFetch from "../../Component/Hook/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies", "Tv Show"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default TopRated;
