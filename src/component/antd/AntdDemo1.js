import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import Button1 from './pages/Button1'
import Button2 from './pages/Button2'
import Icon from './pages/Icon'
import Typog from './pages/Typography'
import './css/AntdDemo1.css'
 
class AntdDemo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo1/Button1/'>基础button及ICON-button</Link></li>
                        <li><Link to='/AntdDemo1/Button2/'>Radio.Group及loading_button</Link></li>
                        <li><Link to='/AntdDemo1/Icon/'>Icon</Link></li>
                        <li><Link to='/AntdDemo1/Typog/'>排版</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo1/Button1/' component={Button1} />
                        <Route path='/AntdDemo1/Button2/' component={Button2} />
                        <Route path='/AntdDemo1/Icon/' component={Icon} />
                        <Route path='/AntdDemo1/Typog/' component={Typog} />
                        <Redirect to='/AntdDemo1/Button1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo1;

 

 

 

