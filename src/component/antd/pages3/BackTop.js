
// antd BackTop回到顶部

import React from 'react'
import { BackTop } from 'antd';

class BackTopDemo extends React.Component {

  render() {
    return (
      <>
         <div>
            <BackTop visibilityHeight={100}/>
            Scroll down to see the bottom-right
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            button.
        </div>
      </>
    );
  }
}

export default BackTopDemo;
