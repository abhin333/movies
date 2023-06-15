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
import searchResult from "./Page/SearchResult/searchResult";
import Explore from "./Page/Explore/Explore";
import Details from "./Page/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      // dispatch(getGeners(res));
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
    console.log("data", data[0].data.genres, data[1].data.genres);
    let dataa = [data[0].data, data[1].data];
    dataa.map(({ genres }) => {
      console.log("gg", genres);
      return genres.map((item) => (allGenres[item.id] = item));
    }); // geners are not getting write way !!!!!!
    dispatch(getGenres(allGenres));
  };
  return (
    <BrowserRouter>
      <Header />
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
        <Route
          path="/explore/
        :mediaType"
          element={<Explore />}
        />
      </Routes>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
};

export default App;
