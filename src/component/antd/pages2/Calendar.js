
// antd Calendar日历
import React from 'react'

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


class CalendarDemo extends React.Component {

  render() {
    
    return (
      <>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </>
    );
  }
}

export default CalendarDemo;
