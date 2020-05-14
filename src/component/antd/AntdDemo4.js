import React,{Component} from 'react'
import { Route, Link,Redirect} from 'react-router-dom'
import CheckboxDemo from './pages/Checkbox'
import AutoCompleteDemo from './pages/AutoComplete'
import CascaderDemo from './pages/Cascader'
import DatePickerDemo from './pages/DatePicker'
import WrappedNormalLoginForm from './pages/Form'
import InputNumberDemo from './pages/InputNumber'
import InputDemo from './pages/Input'
import RateDemo from './pages/Rate'
import RadioDemo from './pages/Radio'
import SwitchDemo from './pages/Switch'
import SliderDemo from './pages/Slider'
import SelectDemo from './pages/Select'
import TreeSelectDemo from './pages/TreeSelect'
// import TimePickerDemo from './pages/TimePicker'
import UploadDemo from './pages/Upload'
import './css/AntdDemo1.css'
 
class AntdDemo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return(
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/AntdDemo4/page1/'>多选框</Link></li>
                        <li><Link to='/AntdDemo4/page2/'>自动完成</Link></li>
                        <li><Link to='/AntdDemo4/page3/'>级联选择</Link></li>
                        <li><Link to='/AntdDemo4/page4/'>日期选择框</Link></li>
                        <li><Link to='/AntdDemo4/page5/'>表单</Link></li>
                        <li><Link to='/AntdDemo4/page6/'>数字输入框</Link></li>
                        <li><Link to='/AntdDemo4/page7/'>输入框</Link></li>
                        <li><Link to='/AntdDemo4/page8/'>评分</Link></li>
                        <li><Link to='/AntdDemo4/page9/'>单选框</Link></li>
                        <li><Link to='/AntdDemo4/page10/'>开关</Link></li>
                        <li><Link to='/AntdDemo4/page11/'>滑动输入条</Link></li>
                    </ul>
                    <ul style={{margin:"aotu"}}>
                        <li><Link to='/AntdDemo4/page12/'>选择器</Link></li> 
                        <li><Link to='/AntdDemo4/page13/'>穿梭框</Link></li>
                        <li><Link to='/AntdDemo4/page14/'>上传</Link></li>
                        {/* <li><Link to='/AntdDemo4/page14/'>时间选择框</Link></li> */}
                    </ul>
                </div>
                <div className='videoContent'>
                    <div>
                        <Route path='/AntdDemo4/page1/' component={CheckboxDemo}/>
                        <Route path='/AntdDemo4/page2/' component={AutoCompleteDemo}/>
                        <Route path='/AntdDemo4/page3/' component={CascaderDemo} />
                        <Route path='/AntdDemo4/page4/' component={DatePickerDemo} />
                        <Route path='/AntdDemo4/page5/' component={WrappedNormalLoginForm}/>
                        <Route path='/AntdDemo4/page6/' component={InputNumberDemo} />
                        <Route path='/AntdDemo4/page7/' component={InputDemo} />
                        <Route path='/AntdDemo4/page8/' component={RateDemo} />
                        <Route path='/AntdDemo4/page9/' component={RadioDemo} />
                        <Route path='/AntdDemo4/page10/' component={SwitchDemo} />
                        <Route path='/AntdDemo4/page11/' component={SliderDemo} />
                        <Route path='/AntdDemo4/page12/' component={SelectDemo} />
                        <Route path='/AntdDemo4/page13/' component={TreeSelectDemo} />
                        {/* <Route path='/AntdDemo4/page14/' component={TimePickerDemo} /> */}
                        <Route path='/AntdDemo4/page14/' component={UploadDemo} />
                        <Redirect to='/AntdDemo4/page1/' exact></Redirect>
                    </div>
                </div>
            </div>    
        )
    }
}
 
export default AntdDemo4;