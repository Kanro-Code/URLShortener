import { PrismaClient } from '@prisma/client';
import { getSlug, verifyUrl } from '../utils/utils.js';

const prisma = new PrismaClient();

/**
 * Retrieves a URL object from the database by its slug.
 * @param slug - The slug of the URL to retrieve.
 * @returns A Promise that resolves to the retrieved URL object, or undefined if no URL was found.
 */
const getBySlug = async (slug: string) => {
	const url = await prisma.urlSlug.findUnique({
		where: {
			slug,
		},
	});

	return url;
};

/**
 * Retrieves a URL object from the database by its ID.
 * @param id - The ID of the URL to retrieve.
 * @returns A Promise that resolves to the retrieved URL object, or null if no URL was found with the given ID.
 */
const getById = async (id: string) => {
	const url = await prisma.urlSlug.findUnique({
		where: {
			id,
		},
	});

	return url;
};

/**
 * Creates a new URL with an optional custom slug.
 * @param url - The URL to be shortened.
 * @param slug - An optional custom slug to be used instead of generating a new one.
 * @returns The newly created URL object.
 * @throws An error if the URL is invalid or if the custom slug already exists in the database.
 */
const create = async (url: string, slug?: string) => {
	if (!verifyUrl(url)) {
		throw new Error('Invalid URL');
	}

	if (slug) {
		const existing = prisma.urlSlug.findUnique({ where: { slug } });
		if (!existing) throw new Error('Slug already exists');
	} else {
		slug = await getSlug();
	}

	const newUrl = await prisma.urlSlug.create({
		data: {
			slug,
			url,
		},
	});

	return newUrl;
};

const Url = {
	getBySlug,
	getById,
	create,
};

export default Url;
