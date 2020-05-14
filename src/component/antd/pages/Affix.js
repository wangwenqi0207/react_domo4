// antd Affix固钉
import React from 'react'
import { Affix, Button } from 'antd';

class AffixDemo extends React.Component {

    state = {
        top: 10,
        bottom: 10,
    };

  render() {
    return (
      <>
        <p>固定的内容不会随滚动条的滚动而消失</p>
            <div>
                <Affix offsetTop={this.state.top}
                target={() => window}
                onChange={(e)=>{console.log(e)}}
                >
                <Button
                    type="primary"
                    onClick={() => {
                    this.setState({
                        top: this.state.top + 10,
                    });
                    }}
                >
                    Affix top
                </Button>
                </Affix>
            </div>
      </>
    );
  }
}

export default AffixDemo;
