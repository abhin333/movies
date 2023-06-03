import React from "react";
import { useEffect } from "react";
import "./App.css";
import { fetchDataApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGeners } from "./Store/homeSlice";
import { store } from "./Store/store";
import Home from "./Page/Home/Home";
import Header from "./Component/Header/Header";
import Fotter from "./Component/Footer/Fotter";
import PageNotFound from "./Page/404/PageNotFound";
import searchResult from "./Page/SearchResult/searchResult";
import Explore from "./Page/Explore/Explore";
import Details from "./Page/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("sotre details 2", store);

    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataApi("/configuration").then((res) => {
      console.log("movies response", res);
      const url={
        backdrops:res.data.images.secure_base_url +
        "original",
        poster:res.data.images.secure_base_url +
        "original",
        profile:res.data.images.secure_base_url +
        "original",
      };
      dispatch(getApiConfiguration(url));
      // dispatch(getGeners(res));
    });
  };
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/:mediaType/:id" element={<Details />} />
      </Routes>
      <Routes>
        <Route path="/search/:query" element={<searchResult />} />
      </Routes>
      <Routes>
        <Route path="/explore/
        :mediaType" element={<Explore />} />
      </Routes>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
};

export default App;
