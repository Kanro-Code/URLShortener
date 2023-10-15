import axios from 'axios'
import { NewUrl } from '../types'

const baseUrl = 'api/url'

const create = (newUrl: NewUrl) => {
	const req = axios.post(baseUrl, newUrl)
	return req.then(res => res.data)
}

export default { create }