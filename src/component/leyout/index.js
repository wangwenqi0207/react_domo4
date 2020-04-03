//嵌套路由小案例  布局页面一级路由
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'  //引入路由要用的组件
import AntdDemo1 from '../antd/AntdDemo1' //二级路由
import AntdDemo2 from '../antd/AntdDemo2' 
import AntdDemo3 from '../antd/AntdDemo3' 
import './css/Router.css'
 
//假设是后端获取的动态路由
function AppRouter(){
    let routeConfig = [
        {path:'/AntdDemo1',title:'通用组件',exact:false,component:AntdDemo1},
        {path:'/AntdDemo2',title:'布局',exact:false,component:AntdDemo2},
        {path:'/AntdDemo3',title:'导航',exact:false,component:AntdDemo3},
    ]
    return(
        <Router>
            <div className='mainDiv'>
                {/* 左侧导航部分 */}
                <div className='leftNav'>
                  <h3 style={{color:'#fff'}}>antd使用</h3>
                    <ul>
                        {/* 渲染动态路由 */}
                        {
                            routeConfig.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* 右侧显示部分 */}
                <div className='rightMain'>
                   {
                      routeConfig.map((item,index)=>{
                        return (
                            <Route key={index} exact={item.exact} path={item.path}  component={item.component} />
                        )
                    }) 
                   }
                </div>
            </div>
        </Router>
    )
}
 
export default AppRouter
