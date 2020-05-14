import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import GridDemo from './pages/Grid'
import LayoutDemo from './pages/LayoutDemo'

import './css/AntdDemo1.css'
 
class AntdDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo2/Grid/'>栅格</Link></li>
                        <li><Link to='/AntdDemo2/Layout/'>Layout布局</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo2/Grid/' component={GridDemo} />
                        <Route path='/AntdDemo2/Layout/' component={LayoutDemo} />
                        <Redirect to='/AntdDemo2/Grid/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo2;
