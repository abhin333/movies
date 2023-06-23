import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import useFetch from "../../Component/Hook/useFetch";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import Cast from "./Cast/Cast";
import VideosSection from "./DetailsBanner/VideoSection/VideoSection";
import Similar from "./DetailsBanner/Similar/Similar";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={data?.data?.results?.[0]} crew={credits?.data?.crew} />
      <Cast data={credits?.data?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
