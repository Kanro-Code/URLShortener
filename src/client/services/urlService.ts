import axios from 'axios';

const baseUrl = '/api/url';

const get = () => {
	console.log("'get'");
	return axios.get(baseUrl);
};

const create = (newUrl: string) => {
	console.log(`'create' ${newUrl}`);
	return axios.get(baseUrl);
};

export default { get, create };
