
// antd Slider滑动输入条
import React from 'react'
import { Slider} from 'antd';


function formatter(value) {
    return `${value}%`;
  }

class SliderDemo extends React.Component {
    state = {
        disabled: false,
    };
    
   
  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <br/>
        <Slider tipFormatter={formatter} />
      </>
    );
  }
}

export default SliderDemo;
