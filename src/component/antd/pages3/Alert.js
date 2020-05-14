// antd Alert警告提示

import React from 'react'
import { Alert } from 'antd';

class AlertDemo extends React.Component {

  render() {
    
    return (
      <>
        <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
        />
        <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
        />
        <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        />
        <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
        />
      </>
    );
  }
}

export default AlertDemo;
