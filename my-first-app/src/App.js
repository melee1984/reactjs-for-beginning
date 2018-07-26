import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponents from './components/MyComponents.js';

import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      title: "App Title",
      name: "",
       shouldRenderTitle: true
    };

    // this.onSubmit = this.onSubmit.bind(this);
  }

  onClickHandler(value) {
      this.setState({
            title: value
      });
  }

  onClick () {

    this.setState({
      title: "CLick out side the app.js",
      name: "Click here on Click here change"

    })
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.refs.name.value.trim());
  }

  renderTitle () {

    if (!this.state.shouldRenderTitle) {return null;}

    return (
      <h1>Render Title</h1>
    )

  }

  render() {

    const title = "This is Leslie Page app"

    const list = [
      'Leslie Parba',
      'Alex',
      'John'
    ] 

    return (
        <div className="App">
            <ul className="nav">
               {
                list.map (string => {

                  return (
                      <li onClick={this.onClickHandler.bind(this, string) }>{string}</li>
                    );
                })
               }
            </ul>

            <h2>{this.state.title}</h2>
            <form onSubmit={this.onSubmit}>
              <input ref="name"  onChange={this.onSubmit.bind(this)} />
            </form>

            <MyComponents 
              name={this.state.name}
              title={this.state.title}
              onClick = {this.onClick.bind(this) }
            />

            <hr/> 
            { this.renderTitle()  }
             <hr/> 

        </div>
    );
  }
}

export default App;
