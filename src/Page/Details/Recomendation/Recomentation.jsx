import React from "react";
import Carousel from "../../../Component/carousel/Carousel";
import useFetch from "../../../Component/Hook/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
