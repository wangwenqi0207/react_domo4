// antd Layout
import React from 'react'
import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class LayoutDemo extends React.Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    //   onCollapse=(e)=>{
    //       console.log("e")
    //   }

    render() {
        return (
            <>
               <div style={{width:"90%"}}>
                <p>典型的页面布局。</p>
               <Layout>
                    <Header style={{background:"#7dbcea"}}>Header</Header>
                    <Layout>
                        <Sider style={{height:"300px",background:"#1890ff"}}>Sider</Sider>
                        <Content style={{background:"rgba(16, 142, 233, 1)"}}>Content</Content>
                    </Layout>
                    <Footer  style={{background:"#7dbcea"}}>Footer</Footer>
                </Layout>
               </div>
               <div style={{margin:"40px 0",width:"90%"}}>
                   <p>自定义触发器</p>
                   <Layout>
                        <Sider 
                        trigger={null} 
                        collapsible 
                        collapsed={this.state.collapsed}
                        collapsedWidth={80} 
                        // theme='light'
                        onCollapse={(collapsed, type) => {console.log(type)}}
                        >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                        </Layout>
                </Layout>
               </div>
            </>
        );
    }
}

export default LayoutDemo;








