import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Blog extends Component {

    constructor() {

        super();
        this.state = {
            blogs: []
        }

        console.log('BLOG');
    }

    componentWillMount() {

        axios.get('/api/blog').then(response => {
            this.setState({
                blogs: response.data
            });
        }).catch(errors => {
            console.log(errors)
        });
    }

    componentWillUnmount  () {

    }

    render() {
        return (
            <div className="container">
                <ul>  
                    
                    { this.state.blogs.map(blog => 
                        <Link to={'/blog/'+blog.id}>
                            <li>{blog.title}</li>
                        </Link>
                    )}

               </ul>
            </div>
        );
    }
    
}

// if (document.getElementById('example')) {
//     ReactDOM.render(<Blog />, document.getElementById('example'));
// }
