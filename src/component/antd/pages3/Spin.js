
// antd Spin加载中

import React from 'react'
import { Spin, Alert,Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class SpinDemo extends React.Component {

  render() {
    return (
      <>
        <Spin tip="Loading...">
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
            />
        </Spin>
        <br/>
        <br/>
        <Spin indicator={antIcon} />
      </>
    );
  }
}

export default SpinDemo;
