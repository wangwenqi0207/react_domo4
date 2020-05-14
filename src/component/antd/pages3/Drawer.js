// antd Drawer抽屉

import React from 'react'
import { Drawer, Button } from 'antd';

class DrawerDemo extends React.Component {
    state = { visible: false,visible2: false, };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    showDrawer2 = () => {
        this.setState({
          visible2: true,
        });
      };
    
    onClose2 = () => {
        this.setState({
          visible2: false,
        });
    };

  render() {
    
    return (
      <>
        <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
        <br/>
        <br/>
      <div
        style={{
          height: 200,
          width:400,
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid #ebedf0',
          borderRadius: 2,
          padding: 48,
          textAlign: 'center',
          background: '#fafafa',
        }}
      >
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer2}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose2}
          visible={this.state.visible2}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
      </>
    );
  }
}

export default DrawerDemo;
