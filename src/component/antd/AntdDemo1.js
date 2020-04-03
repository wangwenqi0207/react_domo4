import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import Button1 from './pages/Button1'
import Button2 from './pages/Button2'

import './css/AntdDemo1.css'
 
class AntdDemo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo1/Button1/'>button1</Link></li>
                        <li><Link to='/AntdDemo1/Button2/'>button2</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo1/Button1/' component={Button1} />
                        <Route path='/AntdDemo1/Button2/' component={Button2} />
                        <Redirect to='/AntdDemo1/Button1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo1;

 

 

 

