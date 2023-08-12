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
		// --- Start: Core stylelint + stylistic rules ---
		// whitespace rules
		'stylistic/indentation': 'tab',
		'stylistic/max-empty-lines': 1,
		'stylistic/no-eol-whitespace': true,
		'no-irregular-whitespace': true,
		'stylistic/no-missing-end-of-source-newline': true,

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
		'stylistic/at-rule-name-case': 'lower',
		'stylistic/at-rule-name-space-after': 'always-single-line',
		'stylistic/at-rule-semicolon-newline-after': 'always',
		'stylistic/block-closing-brace-empty-line-before': 'never',
		'stylistic/block-closing-brace-newline-after': 'always',
		'stylistic/block-closing-brace-newline-before': 'always-multi-line',
		'stylistic/block-closing-brace-space-after': 'always-single-line',
		'stylistic/block-closing-brace-space-before': 'always-single-line',
		'stylistic/block-no-empty': true,
		'stylistic/color-hex-case': 'lower',
		'stylistic/color-hex-length': 'short',
		'stylistic/color-named': 'never',
		'stylistic/comment-whitespace-inside': 'always',
		'stylistic/custom-property-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		'stylistic/declaration-bang-space-after': 'never',
		'stylistic/declaration-bang-space-before': 'always',
		'stylistic/declaration-block-no-redundant-longhand-properties': [true, {
			'ignoreShorthands': [
				'/flex/',
			],
		} ],
		'stylistic/declaration-block-semicolon-newline-after': 'always',
		'stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
		'stylistic/declaration-block-semicolon-space-after': 'always-single-line',
		'stylistic/declaration-block-semicolon-space-before': 'never',
		'stylistic/declaration-block-single-line-max-declarations': 1,
		'stylistic/declaration-block-trailing-semicolon': 'always',
		'stylistic/declaration-colon-space-after': 'always',
		'stylistic/declaration-colon-space-before': 'never',
		'declaration-no-important': true,

		'font-weight-notation': 'numeric',
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,

		'length-zero-no-unit': true,
		'stylistic/number-leading-zero': 'never',
		'stylistic/number-no-trailing-zeros': true,

		'stylistic/selector-attribute-brackets-space-inside': 'always',
		'stylistic/selector-attribute-operator-space-after': 'never',
		'stylistic/selector-attribute-operator-space-before': 'never',
		'stylistic/selector-attribute-quotes': 'always',
		'stylistic/selector-combinator-space-after': 'always',
		'stylistic/selector-combinator-space-before': 'always',
		'stylistic/selector-descendant-combinator-no-non-space': true,
		'stylistic/selector-list-comma-newline-after': 'always',
		'stylistic/selector-list-comma-newline-before': 'never-multi-line',
		'stylistic/selector-list-comma-space-after': 'always-single-line',
		'stylistic/selector-list-comma-space-before': 'never',
		'selector-max-id': 0,
		'stylistic/selector-pseudo-class-case': 'lower',
		'stylistic/selector-pseudo-class-parentheses-space-inside': 'always',
		'stylistic/selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,

		'stylistic/string-quotes': 'single',
		'stylistic/unit-case': 'lower',
		'value-keyword-case': [ 'lower', {
			'ignoreProperties': [
				'font-family',
				'/^--font-/',
			],
		} ],
		'stylistic/value-list-comma-newline-after': 'never-multi-line',
		'stylistic/value-list-comma-newline-before': 'never-multi-line',
		'stylistic/value-list-comma-space-after': 'always-single-line',
		'stylistic/value-list-comma-space-before': 'never',
		'stylistic/value-list-max-empty-lines': 0,
		// --- End: core stylelint + stylistic rules ---

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
