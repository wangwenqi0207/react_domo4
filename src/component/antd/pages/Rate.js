
// antd Rate评分
import React from 'react'
import { Rate } from 'antd';


class RateDemo extends React.Component {

  render() {
    return (
      <div>
        <Rate />
        <br/>
        <Rate allowHalf defaultValue={2.5} />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      </div>
    );
  }
}

export default RateDemo;
