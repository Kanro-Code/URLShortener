import axios from 'axios';
import { NewUrl } from '../types';

const baseUrl = 'api/url';

const create = async (newUrl: NewUrl) => {
	const res = await axios.put(baseUrl, newUrl);
	return res.data
};

export default { create };
