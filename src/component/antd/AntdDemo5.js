import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import AvatarDemo from './pages2/Avatar'
import BadgeDemo from './pages2/Badge'
import CommentDemo from './pages2/Comment'
import CommentDemo2 from './pages2/Comment2'
import CollapseDemo from './pages2/Collapse'
import CarouselDemo from './pages2/Carousel'
import CardDemo from './pages2/Card'
import CalendarDemo from './pages2/Calendar'
import DescripDemo from './pages2/Descriptions'
import EmptyDemo from './pages2/Empty'
import ListDemo from './pages2/List'
import PopoverDemo from './pages2/Popover'
import StatisticrDemo from './pages2/Statistic'
import TreeDemo from './pages2/Tree'
import TooltipDemo from './pages2/Tooltip'
import TimelineDemo from './pages2/Timeline'
import TagDemo from './pages2/Tag'
import TabsDemo from './pages2/Tabs'
import TableDemo from './pages2/Table'
import './css/AntdDemo1.css'
 
class AntdDemo5 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo5/page1/'>头像</Link></li>
                        <li><Link to='/AntdDemo5/page2/'>徽标数</Link></li>
                        <li><Link to='/AntdDemo5/page3/'>评论</Link></li>
                        <li><Link to='/AntdDemo5/page4/'>评论2</Link></li>
                        <li><Link to='/AntdDemo5/page5/'>折叠面板</Link></li>
                        <li><Link to='/AntdDemo5/page6/'>走马灯</Link></li>
                        <li><Link to='/AntdDemo5/page7/'>卡片</Link></li>
                        <li><Link to='/AntdDemo5/page8/'>日历</Link></li>
                        <li><Link to='/AntdDemo5/page9/'>描述列表</Link></li>
                        <li><Link to='/AntdDemo5/page10/'>空状态</Link></li>
                        <li><Link to='/AntdDemo5/page11/'>列表</Link></li>
                        <li><Link to='/AntdDemo5/page12/'>气泡卡片</Link></li>
                        <li><Link to='/AntdDemo5/page13/'>统计数值</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/AntdDemo5/page14/'>树形控件</Link></li>
                        <li><Link to='/AntdDemo5/page15/'>文字提示</Link></li>
                        <li><Link to='/AntdDemo5/page16/'>时间轴</Link></li>
                        <li><Link to='/AntdDemo5/page17/'>标签</Link></li>
                        <li><Link to='/AntdDemo5/page18/'>标签页</Link></li>
                        <li><Link to='/AntdDemo5/page19/'>表格</Link></li>
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo5/page1/' component={AvatarDemo} />
                        <Route path='/AntdDemo5/page2/' component={BadgeDemo} />
                        <Route path='/AntdDemo5/page3/' component={CommentDemo} />
                        <Route path='/AntdDemo5/page4/' component={CommentDemo2} />
                        <Route path='/AntdDemo5/page5/' component={CollapseDemo} />
                        <Route path='/AntdDemo5/page6/' component={CarouselDemo} />
                        <Route path='/AntdDemo5/page7/' component={CardDemo} />
                        <Route path='/AntdDemo5/page8/' component={CalendarDemo} />
                        <Route path='/AntdDemo5/page9/' component={DescripDemo} />
                        <Route path='/AntdDemo5/page10/' component={EmptyDemo} />
                        <Route path='/AntdDemo5/page11/' component={ListDemo} />
                        <Route path='/AntdDemo5/page12/' component={PopoverDemo} />
                        <Route path='/AntdDemo5/page13/' component={StatisticrDemo} />
                        <Route path='/AntdDemo5/page14/' component={TreeDemo} />
                        <Route path='/AntdDemo5/page15/' component={TooltipDemo} />
                        <Route path='/AntdDemo5/page16/' component={TimelineDemo} />
                        <Route path='/AntdDemo5/page17/' component={TagDemo} />
                        <Route path='/AntdDemo5/page18/' component={TabsDemo} />
                        <Route path='/AntdDemo5/page19/' component={TableDemo} />
                        <Redirect to='/AntdDemo5/page1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo5;

 

 

 

