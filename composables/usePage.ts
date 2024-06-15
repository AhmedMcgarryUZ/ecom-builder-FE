import type { Page } from '~/types/page'

const usePage = async () => {
  return await useService<Page>('/api/page')
}

export default usePage
