/* eslint-disable ts/explicit-function-return-type */
import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()
  const headerLinks = computed(() => {
    return [{
      label: 'Stories',
      to: '/stories',
      active: route.path.startsWith('/stories'),
    }, {
      label: 'Topics',
      to: '/topics',
      active: route.path.startsWith('/topics'),
    }, {
      label: 'About',
      to: '/about',
      active: route.path.startsWith('/about'),
    }, {
      label: 'Contact',
      to: '/contact',
      active: route.path.startsWith('/contact'),
    }]
  })
  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks
