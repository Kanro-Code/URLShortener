import { PrismaClient } from '@prisma/client';
import { customAlphabet } from 'nanoid';
import { URLBase } from '../types';

const nanoid = customAlphabet(
	'1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	6
);

const prisma = new PrismaClient({ errorFormat: 'pretty' });

export const getById = async (id: number): Promise<URLBase> => {
	const url = await prisma.url.findUnique({ where: { id } });

	if (!url) throw new Error('URL not found');

	return url;
};

export const getByNano = async (nano: string): Promise<URLBase> => {
	const url = await prisma.url.findUnique({ where: { nano } });

	if (!url) throw new Error('URL not found');

	return url;
};

export const create = async (url: string): Promise<URLBase> => {
	// Verify URL is valid - TBD
	const valid = new URL(url);

	const nano = nanoid();

	// Check if nano is already in use
	console.log(nano);

	const newUrl = await prisma.url.create({
		data: { url, nano },
	});

	return newUrl;
};
