// antd Dropdown下拉菜单
import React from 'react'
import { Menu, Dropdown, Icon, message} from 'antd';

const { SubMenu } = Menu;

   const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            支付宝
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            淘宝
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            天猫
          </a>
        </Menu.Item>
      </Menu>
    );

    //点击弹出值
    const handleClick = ({ key }) => {
      message.info(key);
    };

    const menu2 = (
      <Menu onClick={handleClick}>
        <Menu.Item key="1">支付宝</Menu.Item>
        <Menu.Item key="2">淘宝</Menu.Item>
        <Menu.Item key="3">天猫</Menu.Item>
      </Menu>
    );

    const menu3 = (
        <Menu>
          <Menu.Item>1st menu item</Menu.Item>
          <SubMenu title="sub menu">
            <Menu.Item>2rd menu item</Menu.Item>
            <Menu.Item>3th menu item</Menu.Item>
          </SubMenu>
          <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>4d menu item</Menu.Item>
          </SubMenu>
        </Menu>
      );

class DropdownDemo extends React.Component {

  // 菜单显示开启闭合时调用
  VisibleChange(e){
    console.log(e)
  }

  state = {

  };

  render() {
    return (
      <div>
        <div>
           <Dropdown 
           overlay={menu}
            //  disabled
            trigger={['click']} 
            // visible
           >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              触摸触发 <Icon type="down" />
            </a>
          </Dropdown>
        </div>
         <div style={{ marginTop: "20px" }}>
            <Dropdown overlay={menu2}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                点击我弹出key <Icon type="down" />
              </a>
          </Dropdown>
         </div>
         <div style={{ marginTop: "20px" }}>
           <Dropdown overlay={menu3}
           onVisibleChange={this.VisibleChange.bind(this)}
           trigger={['click']}
           >
            <a className="ant-dropdown-link"
            onClick={e => e.preventDefault()}
            >
              折叠多级 <Icon type="down" />
            </a>
          </Dropdown>
         </div>
      </div>
    );
  }
}

export default DropdownDemo;
