// antd button
import React from 'react'
import { Button, Radio,  } from 'antd';

class Button2 extends React.Component {

  state = {
    iconLoading: false,
  };

  // 点击loading
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  // Radio.Group change回调点击取值
  handleSizeChange(e){
    console.log(e.target.value)
  };


  render() {
    return (
      <div>
        <div style={{ marginTop: "20px" }}>
          <Radio.Group onChange={this.handleSizeChange.bind(this)}>
            <Radio.Button value="按钮1">按钮1</Radio.Button>
            <Radio.Button value="按钮2">按钮2</Radio.Button>
            <Radio.Button value="按钮3">按钮3</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "30px" }}>
          <p>block属性将使按钮适合其父宽度。</p>
          <p>loading设置按钮为载入状态</p>
          <Button
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
            block
            >
            Click me!
          </Button>
        </div>
      </div>
    );
  }
}

export default Button2;


 

 

 

