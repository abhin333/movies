import React, { useState } from "react";
import Carousel from "../../../../Component/carousel/Carousel";
import useFetch from "../../../../Component/Hook/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title="similar"
      data={data?.data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Similar;
