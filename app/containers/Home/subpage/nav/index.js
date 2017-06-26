import React from "react";
import {Card, Flex, WingBlank} from "antd-mobile";

export default class Nav extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={{fontSize:'20px',color:'white'}}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#fb6179',marginTop:10}}>
                货源列表
              </div>
            </Flex.Item>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#25c4d9',marginTop:10}}>
                车源列表
              </div>
            </Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#298bf5',marginTop:10}}>
                发布资源
              </div>
            </Flex.Item>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#86c921',marginTop:10}}>
                已发货源
              </div>
            </Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#f3b717',marginTop:10}}>
                发布车源
              </div>
            </Flex.Item>
            <Flex.Item>
              <div style={{textAlign:'center',height:'100px',lineHeight:'100px',background:'#fc834b',marginTop:10}}>
                已发货源
              </div>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>

    );
  }
}
