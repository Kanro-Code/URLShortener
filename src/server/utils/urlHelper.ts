import { NewUrl } from '../types';

const isObject = (value: unknown): value is object => {
	return value !== null && typeof value === 'object';
};

const isString = (value: unknown): value is string => {
	return typeof value === 'string' || value instanceof String;
};

export const isValidUrl = (url: string): boolean => {
	if (!url) {
		return false;
	}
	return true;
};

export const parseUrl = (url: unknown): NewUrl => {
	if (isObject(url) && 'original' in url && isString(url.original)) {
		if (!isValidUrl(url.original)) {
			throw new Error('Incorrect or missing url');
		}

		const newObject: NewUrl = { original: url.original };
		if ('slug' in url) {
			// TODO: Check if url.slug is a valid slug
			if (!isString(url.slug)) {
				throw new Error('Incorrect slug');
			}
			newObject.slug = url.slug;
		}
		return newObject;
	}

	throw new Error('Incorrect or missing url');
};
