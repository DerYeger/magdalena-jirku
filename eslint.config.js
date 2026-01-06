import yeger from '@yeger/eslint-config'

export default yeger(
  {
    ignores: ['public/**/*'],
  },
  {
    rules: {
      'react/no-unnecessary-use-prefix': 'off',
    },
  },
)
