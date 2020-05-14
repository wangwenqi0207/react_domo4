// antd 分页
import React from 'react'
import { Pagination } from 'antd';

class PagiDemo extends React.Component {

  state = {

  };

  Changehandle(e){
    console.log(e)
  }

  ShowSizeChange(e){
    console.log('pagesize',e)
  }

  render() {
    return (
      <div>
        <Pagination
        defaultCurrent={1}
        total={50}
        showTotal={total => `总共有 ${total} 条`}
        pageSize={10}
        onChange={this.Changehandle.bind(this)}
        showQuickJumper
        showSizeChanger
        size='small'
        onShowSizeChange={this.ShowSizeChange.bind(this)}
        />
      </div>
    );
  }
}

export default PagiDemo;
