import React, { useState } from "react";

import Carousel from "../../Component/carousel/Carousel";
import ContentWrapper from "../../Component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../Component/SwitchTabs/SwitchTabs";

import useFetch from "../../Component/Hook/useFetch";

const Latest = () => {
    const [endpoint, setEndpoint] = useState("movie");
    
    const { data, loading } = useFetch(`/${endpoint}/upcoming`);
    console.log("dtaaaaaaa2",data);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "movie");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Up Comming</span>
                <SwitchTabs data={["Movies", "Tvshows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default Latest;
