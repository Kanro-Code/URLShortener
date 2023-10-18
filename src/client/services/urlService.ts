import axios from 'axios';
import { NewUrl } from '../types';

const baseUrl = '/api/url';

const get = () => {
	console.log("'get'");
	return axios.get(baseUrl);
};

const create = async ({ original, slug }: NewUrl): Promise<NewUrl> => {
	const newObject = {
		original,
		slug,
	};
	const res = await axios.post(baseUrl, newObject);
	return res.data;
};

export default { get, create };
