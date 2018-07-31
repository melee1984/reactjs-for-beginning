import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BlogArticlePost extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }
    }

    handleTitleChange(e) {

        this.setState({
            name: e.target.value
        });

    }

    handleBlogChange(e){ 

        this.setState({
            body: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        
        axios.post('/api/blog', this.state).then(response=>{
            console.log(response);
        }).then(error => {

            console.log(error)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Post a new Article</div>

                            <div className="card-body">

                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="">
                                        <input 
                                            type="text"
                                            title="name"
                                            placeholder="Enter Blog Name"
                                            className="form-control"
                                            onChange={this.handleTitleChange.bind(this)}
                                            value={this.state.value}
                                        />
                                    </div>

                                    <div className="">
                                        <textarea
                                            name="blog"
                                            placeholder="Enter blog body"
                                            className="form-control"
                                            onChange={this.handleBlogChange.bind(this)}>
                                        </textarea>
                                    </div>

                                    <div className="">
                                        <button type="submit" className="btn btn-default btn-primary">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

