export interface Url {
	id: string;
	url: string;
	slug: string;
	visited: number;
	createdAt: string;
	updatedAt: string;
}

export interface NewUrl {
	url: string;
	slug?: string;
}
