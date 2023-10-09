module.exports = {
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'no-tabs': 0,
		'linebreak-style': 0,
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-use-before-define': 'off',
	},
};
