import yeger from '@yeger/eslint-config'

export default yeger(
  {
    ignores: ['public/**/*'],
  },
  {
    rules: {
      'react-hooks-extra/no-unnecessary-use-prefix': 'off',
    },
  },
)
