// eslint-disable-next-line import/no-named-as-default
import NProgress from 'nprogress'

import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
