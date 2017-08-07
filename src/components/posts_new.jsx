import React, {Component, PropType} from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

@observer(['addPost'])
class AddPostForm extends Component {
	constructor(props){
		super(props);
		this.updateProperty = this.updateProperty.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	updateProperty(key, value) {
		this.props.addPost[key] = value;
	}
	onChange (event) {
		this.updateProperty(event.target.name, event.target.value);
	}
	
	onSubmit(event) {
		event.preventDefault();
		this.props.addPost.createPost(this.props.addPost, () => {
			this.props.history.push('/');
		});
		return false;
	}
	render(){
		const myPost = this.props.addPost;
		return (
			<div>
			<h1>Add Post Form</h1>
			<form onSubmit={this.onSubmit.bind(this)}>
			  <label>Title of the Post</label> <br/>
			  <input type="text" name="title"  onChange={this.onChange} className="form-control"/><br/>
			  <label>Categories</label>	<br/>
			  <input type="text" name="categories"  onChange={this.onChange} className="form-control"/><br/>
			  <label>Content</label> <br/>
			  <input type="text" name="content"  onChange={this.onChange} className="form-control"/> <br />
			  <button type="submit" className="btn btn-primary" >Submit</button>
			  <Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
			<DevTools />
			</div>
		)
	}
}
export default AddPostForm;
