import axios from 'axios';
import { action } from 'mobx';

class ServiceApi {
  /* This action gets data from the server */
	@action getData(url,callback) {
		axios.get(url)
		.then((response) => {
			callback(response.data);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	@action deleteData(url,id,callback) {
		axios.delete(url,id)
		.then((response) => {
			callback(response.data);
		});
	}

	@action addData(url,values,callback) {
		axios.post(url,values)
		.then((response) => {
			callback(response.data);
		});
	}
}
export default new ServiceApi();
// export function fetchPosts() {
//   const request =axios.get(`${ROOT_URL}/posts${API_KEY}`);
//   return {
//     type: FETCH_POSTS,
//     payload: request
//   }
// }
//
// export function createPost(values, callback) {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
//   .then(() => callback());
//   return {
//     type: CREATE_POST,
//     payload: request
//   }
// }
//
// export function fetchPost(id) {
//   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
//   return {
//     type: FETCH_POST,
//     payload: request
//   }
// }
//
// export function deletePost(id, callback) {
//   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`,id)
//   .then(() => callback());
//   return {
//     type: DELETE_POST,
//     payload:id
//   }
// }
