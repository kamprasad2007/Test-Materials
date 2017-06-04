import axios from 'axios';

export default class VODService {
	constructor(endpointUrl) {
		this.endpointUrl = endpointUrl;
	}
	getData() {
		//calling GET /api/videos end-point through axios http client
		return axios.get(this.endpointUrl)
		.then(response =>
			response.status === 200 ? response.data : []
		)
		.catch(error =>
			console.log(error)
		);
	}
}