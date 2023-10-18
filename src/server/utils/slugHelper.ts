import { customAlphabet } from 'nanoid';

// Nanoid will generate a default 4 character slug
// Giving it a custom alphabet will allow us to generate a slug with only lowercase letters and numbers
// This provides us with 36^4 = 1,679,616 possible slugs
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 4);

export const create = (length: number): string => {
	return nanoid(length);
};

export const verify = (slug: string): boolean => {
	// TODO: Implement proper slug verification
	return /^[0-9a-z]{4}$/.test(slug);
};
