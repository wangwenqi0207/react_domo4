
// antd DatePicker日期选择框
import React from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}
function OpenChange() {
  console.log('弹出，关闭');
}

function PanelChange() {
  console.log('切换');
}

class DatePickerDemo extends React.Component {

  render() {
    return (
      <>
        <div>
            <DatePicker onChange={onChange} 
            onOpenChange={OpenChange}
            onPanelChange={PanelChange}
            />
            <br />
            <br />
            <RangePicker onChange={onChange} />
        </div>
      </>
    );
  }
}

export default DatePickerDemo;
