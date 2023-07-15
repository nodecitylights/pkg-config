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
						'@respponsive',
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
