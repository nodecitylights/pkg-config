const properties = require('./properties.json');

module.exports = {
	extends: [
		'stylelint-config-recommended',
	],
	plugins: [
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-high-performance-animation',
	],
	rules: {
		// whitespace rules
		'indentation': 'tab',
		'max-empty-lines': 1,
		'no-eol-whitespace': true,
		'no-irregular-whitespace': true,
		'no-missing-end-of-source-newline': true,

		// other rules
		'at-rule-empty-line-before': [ 'always', {
			'except': [
				'blockless-after-blockless',
				'first-nested',
			],
			'ignore': [
				'after-comment',
			],
		} ],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-semicolon-newline-after': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-after': 'always-single-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': true,
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-named': 'never',
		'comment-whitespace-inside': 'always',
		'custom-property-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-redundant-longhand-properties': [true, {
			'ignoreShorthands': [
				'/flex/',
			],
		} ],
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': true,

		'font-weight-notation': 'numeric',
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,

		'length-zero-no-unit': true,
		'number-leading-zero': 'never',
		'number-no-trailing-zeros': true,

		'selector-attribute-brackets-space-inside': 'always',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'selector-max-id': 0,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'always',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,

		'string-quotes': 'single',
		'unit-case': 'lower',
		'value-keyword-case': [ 'lower', {
			'ignoreProperties': [
				'font-family',
				'/^--font-/',
			],
		} ],
		'value-list-comma-newline-after': 'never-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,

		// custom stylelint plugin rules
		'order/order': [
			'custom-properties',
			'declarations',
			'at-rules',
		],
		'order/properties-order': [
			...properties['display-size'],
			...properties['scroll'],
			...properties['containers'],
			...properties['columns'],
			...properties['flexbox'],
			...properties['grid'],
			...properties['padding-margin'],
			...properties['border-outline'],
			...properties['background'],
			...properties['text'],
			...properties['animations'],
			...properties['transforms'],
		],
		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-low-performance-animation-properties': true,
	},
};
