
// antd Popover气泡卡片
import React from 'react'
import { Popover, Button } from 'antd';

class PopoverDemo extends React.Component {

    state = {
        visible: false,
      };
    
      hide = () => {
        this.setState({
          visible: false,
        });
      };
    
      handleVisibleChange = visible => {
        this.setState({ visible });
      };
    

  render() {
    
    return (
      <>
      <div style={{marginTop:"50px"}}>
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
      </div>
      </>
    );
  }
}

export default PopoverDemo;
