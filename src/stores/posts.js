import _ from 'lodash';
import { observable, action } from 'mobx';
import ServiceApi from '../actions/index';
import Constants from '../constants/constants';


class Posts {
	@observable posts;

	@action fetchPosts(){
		const request =`${Constants.ROOT_URL}/posts${Constants.API_KEY}`;
		ServiceApi.getData(request, (data) => {
			console.log("fetch all posts  successfully");
			this.posts = _.mapKeys(data,'id');
			//console.log(this.posts);
		});
	}

	@action fetchPostById(id) {
		const request = `${Constants.ROOT_URL}/posts/${id}/${Constants.API_KEY}`
		ServiceApi.getData(request, (data) => {
			console.log("fetch post  successfully");
			this.posts = {...this.posts,[id]: data};
			//console.log(this.posts);
		});
	}

	@action deletePost(id,callback) {
		const request = `${Constants.ROOT_URL}/posts/${id}/${Constants.API_KEY}`
		ServiceApi.deleteData(request,id, (data) => {
			console.log("data delete successfully");
			_.omit(this.posts,data);
			//console.log(data);
			callback();
		})
	}
}
export default new Posts();
