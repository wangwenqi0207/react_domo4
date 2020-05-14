import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import AlertDemo from './pages3/Alert'
import DrawerDemo from './pages3/Drawer'
import ModalDemo from './pages3/Modal'
import MessageDemo from './pages3/Message'
import NotificatDemo from './pages3/Notification'
import ProgressDemo from './pages3/Progress'
import PopconfirmDemo from './pages3/Popconfirm'
import ResultDemo from './pages3/Result'
import SpinDemo from './pages3/Spin'
import SkeletonDemo from './pages3/Skeleton'
import './css/AntdDemo1.css'
 
class AntdDemo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo6/page1/'>警告提示</Link></li>
                        <li><Link to='/AntdDemo6/page2/'>抽屉</Link></li>
                        <li><Link to='/AntdDemo6/page3/'>对话框</Link></li>
                        <li><Link to='/AntdDemo6/page4/'>全局提示</Link></li>
                        <li><Link to='/AntdDemo6/page5/'>通知提醒框</Link></li>
                        <li><Link to='/AntdDemo6/page6/'>进度条</Link></li>
                        <li><Link to='/AntdDemo6/page7/'>气泡确认框</Link></li>
                        <li><Link to='/AntdDemo6/page8/'>结果</Link></li>
                        <li><Link to='/AntdDemo6/page9/'>加载中</Link></li>
                        <li><Link to='/AntdDemo6/page10/'>骨架屏</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo6/page1/' component={AlertDemo} />
                        <Route path='/AntdDemo6/page2/' component={DrawerDemo} />
                        <Route path='/AntdDemo6/page3/' component={ModalDemo} />
                        <Route path='/AntdDemo6/page4/' component={MessageDemo} />
                        <Route path='/AntdDemo6/page5/' component={NotificatDemo} />
                        <Route path='/AntdDemo6/page6/' component={ProgressDemo} />
                        <Route path='/AntdDemo6/page7/' component={PopconfirmDemo} />
                        <Route path='/AntdDemo6/page8/' component={ResultDemo} />
                        <Route path='/AntdDemo6/page9/' component={SpinDemo} />
                        <Route path='/AntdDemo6/page10/' component={SkeletonDemo} />
                        <Redirect to='/AntdDemo6/page1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo6;

 

 

 

