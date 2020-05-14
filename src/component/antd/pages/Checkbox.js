// antd Checkbox多选框
import React from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange2(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];


class CheckboxDemo extends React.Component {

  state = {

  };

  render() {
    return (
      <div>
        <div>
          <h4>单个</h4>
            <Checkbox 
            onChange={onChange} 
            checked
            autoFocus
            >Checkbox</Checkbox>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h4>一组</h4>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange2} />
        </div>
      </div>
    );
  }
}

export default CheckboxDemo;
