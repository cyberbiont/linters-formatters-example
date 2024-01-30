module.exports = {
	extends: [`@commitlint/config-conventional`],
	rules: {
		'header-max-length': [2, `always`, 72],
		'scope-case': [2, `always`, `lower-case`],
		'subject-case': [2, `always`, [`sentence-case`]],
		'subject-empty': [2, `never`],
	},
};
