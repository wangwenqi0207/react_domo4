// 自上而下意味着首先编写层级较高的组件,自下而上意味着从最基本的组件开始编写
// 当你的应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。

// --------------------------------------

// 哪些数据应该放在state中？
// 通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

// 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
// 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
// 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。
// 类似 用户输入，勾选 交互的数据属于state

// ----------------------------------------
// {props.children} 使用 类似于插槽

function Son(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Father() {
    return (
      <Son color="blue">
        <h1>Welcome</h1>
        <p>react</p>
      </Son>
    );
  }


  // 不使用props.children的另一种用法
  // 相当于父组件给子组件传入了一个组件 子组件接收展示
  // 但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。
  function Contacts() { 
    return <div className="Contacts" >左边组件</div>;
  }
  
  function Chat() {
    return <div className="Chat" >右边组件</div>;
  }
  
  function Son(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function Father() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }


