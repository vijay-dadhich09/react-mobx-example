import React, {Component, PropType} from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

@observer(['addPost', 'headerStore'])
class AddPostForm extends Component {
	constructor(props){
		super(props);
		this.updateProperty = this.updateProperty.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount(){
		this.props.headerStore.setPageTitle('Add Post');
		//console.log(this.props);
		const {path} = this.props.match;
   		 this.props.headerStore.setSelectedMenu('home',path);
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
			<form role="form" onSubmit={this.onSubmit.bind(this)}>
			  <label htmlFor="title">Title of the Post</label> <br/>
			  <input type="text" id="title" name="title"  onChange={this.onChange} className="form-control"/><br/>
			  <label htmlFor="categories">Categories</label>	<br/>
			  <input type="text" id="categories" name="categories"  onChange={this.onChange} className="form-control"/><br/>
			  <label htmlFor="content">Content</label> <br/>
			  <input type="text" id="content" name="content"  onChange={this.onChange} className="form-control"/> <br />
			  <button type="submit" className="btn btn-primary" >Submit</button>
			  <Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
			<DevTools />
			</div>	
		)
	}
}
export default AddPostForm;
