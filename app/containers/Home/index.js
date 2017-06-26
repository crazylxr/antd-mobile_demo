import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import MyTabBar from "../../components/MyTabBar/index";
import Carousel from "../../components/carousel/index";
import Header from "../../components/Header/index";
import Nav from "./subpage/nav/index";
class Home extends React.Component{
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <Header title='云得快物流平台' />
        <Carousel></Carousel>
        <Nav />
        <MyTabBar />
      </div>

    );
  }
}

export default Home;
