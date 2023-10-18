import axios from 'axios';
import { NewUrl } from '../types';

const baseUrl = '/api/url';

const get = () => {
	console.log("'get'");
	return axios.get(baseUrl);
};

const create = async ({
	newUrl,
	newSlug,
}: {
	newUrl: string;
	newSlug: string;
}): Promise<NewUrl> => {
	console.log(`'create' ${newUrl}`);
	const newObject = {
		original: newUrl,
		slug: newSlug,
	};
	const res = await axios.post(baseUrl, newObject);
	return res.data;
};

export default { get, create };
