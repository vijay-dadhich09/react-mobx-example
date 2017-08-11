import { observable, action } from 'mobx';
import ServiceApi from '../actions/index';
import Constants from '../constants/constants';

class AddPost {
	@observable title;
	@observable categories;
	@observable content;

	@action createPost(values,callback) {
		const request =`${Constants.ROOT_URL}/posts${Constants.API_KEY}`;
		ServiceApi.addData(request,values, (data) => {
			console.log("data added successfully");
			//console.log(data);
			callback();
		})
	}
}
export default new AddPost();
