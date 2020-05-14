
// antd Badge徽标数
import React from 'react'

import { Badge, Icon } from 'antd';

class BadgeDemo extends React.Component {

  render() {
    return (
      <>
         <div>
            <Badge count={5} style={{background:"#ccc"}}>
            <a href="#" className="head-example" />
            </Badge>
            <br/>
            <Badge count={0} showZero>
            <a href="#" className="head-example" />
            </Badge>
            <br/>
            <Badge
                count={4}
                style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
            />
            <br/>
             <Badge count={99} overflowCount={10}>
                 <a href="#" className="head-example" />
            </Badge>
        </div> 
      </>
    );
  }
}

export default BadgeDemo;
