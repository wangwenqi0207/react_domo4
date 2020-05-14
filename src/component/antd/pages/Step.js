// antd 步骤条
import React from 'react'

import { Steps,Icon, Button,message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

class StepDemo extends React.Component {

  state = {
      current: 0,
  };


  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  Changestep(e){
    console.log('e',e)
    console.log(this.state.current)
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <div>
          <p>使用 Steps 的 status 属性来指定当前步骤的状态。status="error"</p>
            <Steps current={2}>
              <Step title="第一步" description="This is a description." />
              <Step title="第二步" subTitle="Left 00:00:08" description="This is a description." />
              <Step title="第三步" description="This is a description." icon={<Icon type="loading" />}/>
            </Steps>
        </div>

        <div style={{ marginTop: "40px" }}>
            <Steps current={current} onChange={this.Changestep.bind(this)}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            {/* <div className="steps-content">{steps[current].content}</div> */}

            <div className="steps-action" style={{ marginTop: "20px" }}>
              {current < steps.length - 1 && (
                <Button type="primary"  onClick={() => this.next()}>
                  下一步
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary"  onClick={() => message.success('已完成!')}>
                  下一步
                </Button>
              )}
              {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  上一步
                </Button>
              )}
            </div>
        </div>
      </div>
    );
  }
}

export default StepDemo;
