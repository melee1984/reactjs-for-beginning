import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Example from './components/Example';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import BlogArticlePost from './components/BlogArticlePost';

export default class Index extends Component {

    render() {
        return (
            <div>
                
                <Router>
                    <Switch>
                        <div>
                            <ul className="nav"> 
                                <li><Link to="/">Home </Link></li>
                                <li><Link to="/blog">Blog </Link></li>
                                <li><Link to="/blog/post-article">Post Article </Link></li>
                            </ul>
                            <hr/>

                            <Route exact path="/" component={Example} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/blog/:id"  render={props => <BlogArticle {...props} /> } /> 
                            <Route exact path="/blog/post-article"  component={BlogArticlePost} /> 
                        </div>
                    </Switch>
                </Router>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}