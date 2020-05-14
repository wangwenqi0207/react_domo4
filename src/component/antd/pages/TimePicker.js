
// antd TimePicker时间选择框

import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
    console.log(time, timeString);
}

  
class TimePickerDemo extends React.Component {
    
   
  render() {
    return (
      <>
        <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </>
    );
  }
}

export default TimePickerDemo;
