
// antd Typography排版
import React from 'react'

import { Typography } from 'antd';

const { Paragraph } = Typography;

class Typog extends React.Component {

  state = {
    str: '我是可编辑文本',
  };

  onChange(str){
    console.log('change str:', str);
    this.setState({ str });
  };

  render() {
    return (
      <div>
          <Paragraph editable={{ onChange: this.onChange.bind(this) }}>{this.state.str}</Paragraph>
          <Paragraph copyable delete mark code type="secondary">This is a copyable text.</Paragraph>
          <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      </div>
    );
  }
}

export default Typog;
