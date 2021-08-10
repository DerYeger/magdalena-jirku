import { mdiHome } from '@mdi/js'
import { localizeDocumentPath, routes } from '~/model/routes'
import { Content } from '~/model/content'

export interface Breadcrumb {
  text: string
  to: string
  icon?: string
}

export const homeBreadcrumb: Breadcrumb = {
  text: routes.home.title,
  to: routes.home.to,
  icon: mdiHome,
}

export const hobbyBreadcrumb: Breadcrumb = {
  text: routes.hobby.title,
  to: routes.hobby.to,
}

export const projectsBreadcrumb: Breadcrumb = {
  text: routes.projects.title,
  to: routes.projects.to,
}

export const aboutBreadcrumb: Breadcrumb = {
  text: routes.about.title,
  to: routes.about.to,
}

export function documentBreadcrumb(
  document: Content,
  locale: string
): Breadcrumb {
  return {
    text: document.shortTitle ?? document.title,
    to: localizeDocumentPath(document, locale)!.path,
  }
}
