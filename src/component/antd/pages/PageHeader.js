// antd PageHeader页头
import React from 'react'
import { PageHeader } from 'antd';

class PageHeaderDemo extends React.Component {

  render() {
    return (
      <>
        <PageHeader
            style={{
            border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
            ghost
        />
      </>
    );
  }
}

export default PageHeaderDemo;
