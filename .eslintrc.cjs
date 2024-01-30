module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard-with-typescript', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		// add your on rules here that will override extended config
		'prefer-const': [
			'off',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		// "prefer-const": ["error", {
		//     "destructuring": "any",
		//     "ignoreReadBeforeAssign": false
		// }]
	},
};
