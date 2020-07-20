import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*   test1   */
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// var id = setInterval(tick, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 3000);



/*   test2   */
// function Title(props){
//   return (
//     <h3>{props.id}</h3>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Title name="test title" id="test id" />
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />
//   , document.getElementById('root')
// );



/*   test3   */
class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state,props) => ({
      date: new Date(),
      name: state.name + props.name2
    }));
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock date={new Date()} name="1" name2="2"/>,
  document.getElementById('root')
);
