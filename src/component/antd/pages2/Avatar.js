
// antd Avatar头像
import React from 'react'

import { Avatar, Badge  } from 'antd';

class AvatarDemo extends React.Component {

  render() {
    return (
      <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
          <div style={{ marginTop: "50px" }}>
            <Badge count={1}>
                <Avatar shape="square" icon="user" />
            </Badge>
          </div>
      </div>
    );
  }
}

export default AvatarDemo;
