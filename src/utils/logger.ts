/* eslint-disable no-console */
const info = (...p: unknown[]) => {
	console.log(...p);
};

const error = (...p: unknown[]) => {
	console.error(...p);
};

export default {
	info,
	error,
};
