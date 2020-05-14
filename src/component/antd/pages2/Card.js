
// antd Card卡片
import React from 'react'
import { Card } from 'antd';

class CardDemo extends React.Component {

  render() {
    
    return (
      <>
       <div>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        </div>
      </>
    );
  }
}

export default CardDemo;
