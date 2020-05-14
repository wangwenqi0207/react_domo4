
// antd Message全局提示
import React from 'react'
import { message, Button } from 'antd';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

class MessageDemo extends React.Component {

  render() {
    return (
      <>
        <Button onClick={success}>Success</Button>
        <br/>
        <br/>
        <Button onClick={error}>Error</Button>
        <br/>
        <br/>
        <Button onClick={warning}>Warning</Button>
      </>
    );
  }
}

export default MessageDemo;
