export default [
	{
		rules: {
			'at-rule-no-unknown': [
				true,
				{
					ignoreAtRules: [
						'@tailwind',
						'@layer',
						'@apply',
						'@config',
						'@responsive',
						'@variants',
					],
				},
			],
			'function-no-unknown': [
				true,
				{
					ignoreFunctions: [
						'theme',
						'screen',
					],
				},
			],
		},
	},
];
