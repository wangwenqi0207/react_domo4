// antd button
// AutoComplete自动完成

import React from 'react'
import { AutoComplete } from 'antd';


const { Option } = AutoComplete;

function onSelect(value) {
    console.log('onSelect', value);
  }

class AutoCompleteDemo extends React.Component {
     state = {
        value: '',
        dataSource: [],
        result: [],
      };
    
      onSearch = searchText => {
        this.setState({
          dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
        });
      };
    
      onChange = value => {
        this.setState({ value });
      };

      handleSearch = value => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
      };
    
      handledocus(){
        console.log("获得焦点")
      }
    
      VisibleChange(){
        console.log("展开下拉")
      }

  render() {
    const { dataSource, value, result } = this.state;
    const children = result.map(email => <Option key={email}>{email}</Option>);
    return (
      <>
          <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
          onFocus={this.handledocus.bind(this)}
          onDropdownVisibleChange={this.VisibleChange.bind(this)}
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
          defaultActiveFirstOption 
        />
        <br />
        <br />
        <AutoComplete style={{ width: 200 }} onSearch={this.handleSearch} placeholder="input here">
         {children}
        </AutoComplete>
      </div>
      </>
    );
  }
}

export default AutoCompleteDemo;


 

 

 

