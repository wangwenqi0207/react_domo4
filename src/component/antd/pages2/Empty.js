
// antd Empty空状态
import React from 'react'
import { Empty } from 'antd';

class EmptyDemo extends React.Component {

  render() {
    
    return (
      <>
        <Empty />
        <br/>
        <br/>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </>
    );
  }
}

export default EmptyDemo;
