import prisma from '../utils/prisma';
import * as slugHelper from '../utils/slugHelper';

export const create = async (original: string, newSlug?: string) => {
	// TODO: Parse URL properly
	const redirect = original;

	// TODO: Parse Slug properly
	const slug = newSlug || slugHelper.create(4);

	const newUrl = await prisma.url.create({
		data: {
			original,
			redirect,
			slug,
		},
	});

	return newUrl;
};

export const getById = async (id: number) => {
	// TODO: Implement
	return id;
};

export const getBySlug = async (slug: string) => {
	// TODO: Implement
	return slug;
};
