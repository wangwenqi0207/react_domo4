
// antd Tooltip文字提示
import React from 'react'
import { Tooltip } from 'antd';

class TooltipDemo extends React.Component {

  render() {
    
    return (
      <>
        <Tooltip title="prompt text">
            <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </>
    );
  }
}

export default TooltipDemo;
