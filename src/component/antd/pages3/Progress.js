
// antd Progress进度条

import React from 'react'
import { Progress } from 'antd';

class ProgressDemo extends React.Component {

  render() {
    return (
      <>
        <Progress percent={30} />
        <Progress percent={100} />
        <Progress percent={70} status="exception" />
        <br/>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </>
    );
  }
}

export default ProgressDemo;
