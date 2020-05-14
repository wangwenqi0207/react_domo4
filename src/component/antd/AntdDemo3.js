import React,{Component} from 'react'
import { Route,Link,Redirect} from 'react-router-dom'
import DropdownDemo from './pages/Dropdown'
import MenuDemo from './pages/MenuDemo'
import PagiDemo from './pages/Pagination'
import StepDemo from './pages/Step'
import AffixDemo from './pages/Affix'
import BreadcrumbDemo from './pages/Breadcrumb'
import PageHeaderDemo from './pages/PageHeader'
import './css/AntdDemo1.css'
 
class AntdDemo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo3/page1/'>下拉菜单</Link></li>
                        <li><Link to='/AntdDemo3/page2/'>导航菜单</Link></li>
                        <li><Link to='/AntdDemo3/page3/'>分页</Link></li>
                        <li><Link to='/AntdDemo3/page4/'>步骤条</Link></li>
                        <li><Link to='/AntdDemo3/page5/'>固钉</Link></li>
                        <li><Link to='/AntdDemo3/page6/'>面包屑</Link></li>
                        <li><Link to='/AntdDemo3/page7/'>页头</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo3/page1/' component={DropdownDemo} />
                        <Route path='/AntdDemo3/page2/' component={MenuDemo} />
                        <Route path='/AntdDemo3/page3/' component={PagiDemo} />
                        <Route path='/AntdDemo3/page4/' component={StepDemo} />
                        <Route path='/AntdDemo3/page5/' component={AffixDemo} />
                        <Route path='/AntdDemo3/page6/' component={BreadcrumbDemo} />
                        <Route path='/AntdDemo3/page7/' component={PageHeaderDemo} />
                        <Redirect to='/AntdDemo3/page1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo3;

 

 

 

