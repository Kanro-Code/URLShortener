import { customAlphabet } from 'nanoid';
import Url from '../controllers/urlController.js';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 6);

/**
 * Checks if a given string is a valid URL.
 * Taken from https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
 * @param url - The string to check.
 * @returns A boolean indicating whether the string is a valid URL.
 */
export const isValidUrl = (url: string): boolean => {
	const urlPattern = new RegExp(
		'^(https?:\\/\\/)?' +
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
			'((\\d{1,3}\\.){3}\\d{1,3}))' +
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
			'(\\?[;&a-z\\d%_.~+=-]*)?' +
			'(\\#[-a-z\\d_]*)?$',
		'i'
	);
	return !!urlPattern.test(url);
};

/**
 * Verifies if a given URL is valid and has a length less than 2000 characters.
 * @param url - The URL to be verified.
 * @returns Returns true if the URL is valid and has a length less than 2000 characters.
 * @throws Throws an error if the URL is not valid or has a length greater than 2000 characters.
 */
export const verifyUrl = (url: string): boolean => {
	if (url.length > 2000)
		throw new Error('URL must be less than 2000 characters');
	if (!isValidUrl(url)) throw new Error('Invalid URL');

	// TODO: Prevent from infintie loops - don't allow redirects to the slu itself

	return true;
};

/**
 * Verifies if a given slug already exists in the database.
 * @param slug - The slug to verify.
 * @returns A Promise that resolves to a boolean indicating if the slug exists or not.
 */
export const verifySlug = async (slug: string): Promise<boolean> => {
	// TODO: Check if slug is valid size etc.

	const existingSlug = await Url.getBySlug(slug);
	return !!existingSlug;
};

/**
 * Generates a unique slug using nanoid and verifies its uniqueness.
 * Recursively calls itself until a unique slug is found.
 * Slug length is 6 characters and is alphanumeric.
 * This gives us 56^6 = 308,915,776 possible combinations.
 * @returns A Promise that resolves to a string representing the unique slug.
 */
export const getSlug = async (): Promise<string> => {
	const newSlug = nanoid();
	const existingSlug = await verifySlug(newSlug);

	return existingSlug ? getSlug() : newSlug;
};
