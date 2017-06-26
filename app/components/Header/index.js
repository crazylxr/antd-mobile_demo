import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={{background:'#2b83d4',color:'white',fontSize:'22px',height:50,textAlign:'center',lineHeight:'50px'}}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
