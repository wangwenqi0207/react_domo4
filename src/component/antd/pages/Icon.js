
// antd ICON
import React from 'react'
import { Icon } from 'antd';


class IconDemo extends React.Component {

  render() {
    return (
      <div style={{fontSize:"23px"}}>
          <div>
            <Icon type="left" />
            <Icon type="right" />
            <Icon type="down" />
            <Icon type="up" />
            <Icon type="bar-chart" />
            <Icon type="stock" />
            <Icon type="alipay"/>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Icon type="sync" spin />
            <Icon type="smile" rotate={180} />
            <Icon type="loading" />
          </div>
          <div className="icons-list">
              <Icon type="smile" theme="twoTone" />
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
              <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          </div>
      </div>
    );
  }
}

export default IconDemo;
