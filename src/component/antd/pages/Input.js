
// antd Input输入框
import React from 'react'
import { Input, Select, Icon } from 'antd';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
);

const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

class InputDemo extends React.Component {

  render() {
    return (
      <div>
         <Input placeholder="Basic usage" /> 
         <br/>
         <br/>
         <div style={{ marginBottom: 16 }}>
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
         </div>
         <br/>
         <Input.Password placeholder="input password" />
      </div>
    );
  }
}

export default InputDemo;
