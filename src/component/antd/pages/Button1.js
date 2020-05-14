// antd button
import React from 'react'
import { Button, Icon } from 'antd';

class Button1 extends React.Component {

  state = {
    
  };

  
  render() {
    return (
      <div>
        <div>
          <p>type属性指定button类型，可选值为 primary dashed danger link</p>
          <Button type="primary">主要button</Button>
          <p>disabled为false指定按钮是否失效</p>
          <Button disabled>默认</Button>
          <Button type="dashed">虚线</Button>
          <Button type="danger">提醒</Button>
          <Button type="link">跳转</Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>shape设置按钮的形状，可选值为 circle、 round 或者不设</p>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle" href="https://www.baidu.com" target = "_blank">A</Button>
          <Button type="primary" icon="search" disabled>Search</Button>
          <Button shape="circle" icon="search" />
          <p>icon设置按钮的图标类型</p>
          <Button icon="search">Search</Button>
          <p>size设置按钮的大小，可选值为 small large 或者不设</p>
          <Button type="primary" size="small"><Icon type="left"/>Backward</Button>
          <Button type="primary" size="small">Forward<Icon type="right"/></Button>
        </div>
      </div>
    );
  }
}

export default Button1;


 

 

 

