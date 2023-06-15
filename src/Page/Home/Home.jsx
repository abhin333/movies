import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from '../Popular/Popular';
import TopRated from '../TopRated/TopRated';
import Latest from '../Latest/Latest'
import "./Home.scss"
function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Latest/>
      <Popular />
      <TopRated/>


        <div ></div>
    </div>
  )
}

export default Home;