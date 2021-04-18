import axios from 'axios';
export default class UserApi {
	static async loginUser(cb, queryData) {
		let resp = await axios.get('http://localhost:4000/users')
		let userData = resp.data.filter(user => user.username == queryData.username && user.password == queryData.password)[0];
		if (userData && userData.id) {
			axios.get(`http://localhost:4000/users/${userData.id}`)
			.then(response => cb(response.data))
			.catch(error => { throw error });
		}


	}


	static getCardDetails(id, cb) {

		axios.get(`http://localhost:4000/cardData/${id}`)
			.then(response => cb(response.data))
			.catch(error => { throw error });
	}


}