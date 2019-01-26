import React, { Component } from 'react';
import Count, {Alias} from './react_test/count';
import PhoneForm from './react_test/PhoneForm';
import PhoneInfoList from './react_test/PhoneInfoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-1111-1111',
      },
      {
        id: 1,
        name: '김준',
        phone: '010-1111-1112',
      }
    ]
  }

  handleremove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleCreate = (data) => {
    console.log(data);

    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })

  }
  render() {
    let noti = "eee";
    return (
      <div>
      <Count name="aa"/>
      <Alias name="bb"/>
      <PhoneForm onCreate={this.handleCreate} />

      <PhoneInfoList data={this.state.information} onRemove={this.handleremove}/>
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //     {noti}
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
