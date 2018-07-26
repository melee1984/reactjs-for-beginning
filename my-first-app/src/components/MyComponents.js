import React, { Component } from 'react';
import PropTypes  from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.string.isRequired
}

const defaultProps = {
  name: "Welcome Default Props"
}

class MyComponents extends Component {

  constructor (props) {
    super(props);

  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount(){
    console.log('did Mount');
  }

  componentWillUpdate(nextProps, nextState) {
      console.log(this.props, this.state, nextProps, nextState);
  }

  omponentDidUpdate(prevProps, prevState) {
      console.log(this.props, this.state, prevProps, prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {

    const { name, title, onClick} = this.props;

    return (
        <div className="App">
          <h1>{title}</h1>
          <p>{name}</p>
          <div onClick={onClick}>Click here</div>
        </div>
    );

  }
}

MyComponents.propTypes = propTypes;
MyComponents.defaultProps = defaultProps;

export default MyComponents;
