import React from "react";
import { useEffect } from "react";
import "./App.css";
import { fetchDataApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres as getGenres } from "./Store/homeSlice";
import { store } from "./Store/store";
import Home from "./Page/Home/Home";
import Header from "./Component/Header/Header";
import Fotter from "./Component/Footer/Fotter";
import PageNotFound from "./Page/404/PageNotFound";
import Explore from "./Page/Explore/Explore";
import Details from "./Page/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./Page/SearchResult/SearchResult";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataApi("/configuration").then((res) => {
      const url = {
        backdrops: res.data.images.secure_base_url + "original",
        poster: res.data.images.secure_base_url + "original",
        profile: res.data.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
      // dispatch(getGenres(res));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    let dataa = [data[0].data, data[1].data];
    dataa.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult/>} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
};

export default App;
