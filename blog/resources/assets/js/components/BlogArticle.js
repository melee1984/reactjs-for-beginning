import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class BlogArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
          post: {}
        };  
    }

    // getDefaultProps(){
    //         console.log('Invoking the getDefaultProps method');
    // }

    // getInitialState () {
    //             console.log('Invoking the getInitialState method');
    //             return null;
    // }
    // componentWillMount() {
    //             console.log('Invoking the componentWillMount method');
    // }

    componentDidMount () {

        console.log(this.props.match.params.id);

        axios.get('/api/blog/' +this.props.match.params.id).then(response => {
            this.setState({ post: response.data });
        })
        .catch(error=> console.log(error));    

    }

    // ComponentWillReceiveProps(){
    //             console.log('Invoking the ComponentWillReceiveProps method');
    // }

    render() {

        if (this.state.post ) {

            return (
                <div>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </div>
            );

        }
        else {

            return null;
        }
        
    }

}

// if (document.getElementById('example')) {
//     ReactDOM.render(<BlogArticle />, document.getElementById('example'));
// }