import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"fiction"} heading={"Now Trending"}/>
      <HorizontalCardProduct category={"non-fiction"} heading={"Best Sellers"}/>

      <VerticalCardProduct category={"academic-educational"} heading={"New Arrivals"}/>
      <VerticalCardProduct category={"children-young-adult"} heading={"International Bestseller"}/>
      <VerticalCardProduct category={"comics-graphic-novels"} heading={"Award Winners"}/>
      <VerticalCardProduct category={"literature-language"} heading={"BW Top Books"}/>
      
    </div>
  )
}

export default Home