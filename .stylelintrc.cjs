module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'declaration-property-unit-allowed-list': {
			'/^border/': ['px'],
			'/^padding|^gap/': ['rem'],
		},
		'unit-allowed-list': ['%', 'px', 'rem', 'em'],
	},
};
