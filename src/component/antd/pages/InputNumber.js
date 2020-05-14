
// antd InputNumber数字输入框
import React from 'react'
import { InputNumber } from 'antd';

function onChange(value) {
    console.log('changed', value);
  }

class InputNumberDemo extends React.Component {

  render() {
    return (
      <div>
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      </div>
    );
  }
}

export default InputNumberDemo;
