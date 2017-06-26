import React from "react";
import img_dog from "./img/dog.jpeg";
import header from "./img/header.jpg";
import hua from "./img/hua.jpeg";

export default class  Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      no : 1,
      timer:null,
    }
  }
  componentDidMount(){
    const timer = setInterval(()=>{
      const no = this.state.no;
      no + 1 > 3 ? this.setState({ no:1 })  : this.setState({ no: no + 1})
    },3000);
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

  renderImg(){
    const no = this.state.no;
    switch (no) {
      case 1:
        return <img style={{width:'100%',height:'100%'}} src={img_dog} alt='dog'/>;
      case 2 :
        return <img style={{width:'100%',height:'100%'}} src={header} alt='dog'/>;
      case 3 :
        return   <img style={{width:'100%',height:'100%'}} src={hua} alt='dog'/>;
      default:

    }
  }

  render(){
    return (
      <div style={{height:200}}>
        {this.renderImg()}
      </div>
    );
  }
}
