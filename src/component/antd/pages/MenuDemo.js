// antd 导航
import React from 'react'
import { Menu } from 'antd';

const { SubMenu } = Menu;

class MenuDemo extends React.Component {

  state = {
    current: 'mail',
  };

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  OpenChange(e){
    console.log('OpenChange ', e);
  }

  onSelect(e){
    console.log('onSelect ', e);
  }

  TitleClick(e){
    console.log('TitleClick ', e);
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"  
          onOpenChange={this.OpenChange.bind(this)}
          onSelect={this.onSelect.bind(this)}
          theme='light'
        >
          <Menu.Item key="0">
            菜单一
          </Menu.Item>

          <Menu.Item key="1" disabled >
            菜单二
          </Menu.Item>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                菜单三
              </span>
            }
            onTitleClick={this.TitleClick.bind(this)}
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item key="3">
             菜单四
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuDemo;
