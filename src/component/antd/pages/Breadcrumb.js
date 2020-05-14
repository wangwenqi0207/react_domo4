// antd Breadcrumb面包屑
import React from 'react'
import { Breadcrumb } from 'antd';

class BreadcrumbDemo extends React.Component {

  render() {
    return (
      <>
         <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="https://www.baidu.com">百度</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default BreadcrumbDemo;
