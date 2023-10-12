import fs from 'fs';
import { isValidUrl } from '../src/utils/utils';

describe('isValidUrl', () => {
	it('should return true for a valid URL', () => {
		const url = 'https://www.example.com';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for http protocol', () => {
		const url = 'http://www.example.com';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return false for an invalid URL', () => {
		const url = 'not a valid url';
		const result = isValidUrl(url);
		expect(result).toBe(false);
	});

	it('should return true for a valid URL with query parameters', () => {
		const url = 'https://www.example.com/?param=value';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a hash fragment', () => {
		const url = 'https://www.example.com/#section';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with both query parameters and a hash fragment', () => {
		const url = 'https://www.example.com/?param=value#section';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a port number', () => {
		const url = 'https://www.example.com:8080';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a path', () => {
		const url = 'https://www.example.com/path/to/resource';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a path and query parameters', () => {
		const url = 'https://www.example.com/path/to/resource?param=value';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a path and a hash fragment', () => {
		const url = 'https://www.example.com/path/to/resource#section';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return true for a valid URL with a path, query parameters, and a hash fragment', () => {
		const url = 'https://www.example.com/path/to/resource?param=value#section';
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	it('should return false if url contains a space', () => {
		const url = 'https://www.example.com/path with space';
		const result = isValidUrl(url);
		expect(result).toBe(false);
	});

	it('should return false if url starts with a space', () => {
		const url = ' https://www.example.com';
		const result = isValidUrl(url);
		expect(result).toBe(false);
	});

	it('should return false if url is null', () => {
		const url = null as string | null;
		const result = isValidUrl(url as string);
		expect(result).toBe(false);
	});

	it('should return true on a big collection of urls', () => {
		const urls = JSON.parse(fs.readFileSync('./tests/urls.json', 'utf8'));
		urls.forEach((url: string) => {
			const result = isValidUrl(url);
			expect(result).toBe(true);
		});
	});
});
