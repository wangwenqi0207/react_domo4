
// antd Radio单选框
import React from 'react'
import { Radio } from 'antd';


class RadioDemo extends React.Component {
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    
  render() {
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
        <br/>
        <br/>
        <div>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        </div>
      </div>
    );
  }
}

export default RadioDemo;
