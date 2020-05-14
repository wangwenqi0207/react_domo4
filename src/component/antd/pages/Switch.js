
// antd Switch开关
import React from 'react'
import { Switch } from 'antd';

function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

class SwitchDemo extends React.Component {
   
    
  render() {
    return (
      <div>
          <Switch defaultChecked onChange={onChange} />
          <br/>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      </div>
    );
  }
}

export default SwitchDemo;
