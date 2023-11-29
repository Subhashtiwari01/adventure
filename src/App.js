import React from 'react'
import Header from './Component/Header'
import Video from './Component/Video'
import './App.css';
import Product from './Component/Product';
import Cards from './Component/Advanture/Cards';
import ImgComponent from './Component/ImgComponent';
import Surfboard from './Component/Surfboard';
import Footermain from './Component/Footermain';
import GrandCollection from './Component/GrandCollection';
import NewArrivals from './Component/NewArrivals'
import Tranding from './Component/Tranading'
import FooterContact from './Component/FooterContact';




export default function App() {
  return (
    <>
      <Header />
      <Video />
      <Product />
      <Cards />
      <ImgComponent />
      <Surfboard />
      <GrandCollection />
      <NewArrivals />
      <Tranding />
      <FooterContact />
      <Footermain />

    </>
  )
}
