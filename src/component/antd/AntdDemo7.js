import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import AnchorDemo from './pages3/Anchor'
import BackTopDemo from './pages3/BackTop'
import DividerDemo from './pages3/Divider'
import './css/AntdDemo1.css'
 
class AntdDemo6 extends Component {
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo7/page1/'>锚点</Link></li>
                        <li><Link to='/AntdDemo7/page2/'>回到顶部</Link></li>
                        <li><Link to='/AntdDemo7/page3/'>分割线</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo7/page1/' component={AnchorDemo} />
                        <Route path='/AntdDemo7/page2/' component={BackTopDemo} />
                        <Route path='/AntdDemo7/page3/' component={DividerDemo} />
                        <Redirect to='/AntdDemo7/page1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo6;

 

 

 

