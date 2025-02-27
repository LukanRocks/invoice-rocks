import { APP_NAME, APP_DESCRIPTION, APP_LOGO_URL, AUTHOR_NAME, AUTHOR_WEBSITE, BASE_URL } from '@/old-stuff/old-lib/variables'

export const ROOTKEYWORDS = ['invoice', 'invoice generator', 'invoice generating', 'invoice app', 'invoice generator app', 'free invoice generator']

export const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  'name': APP_NAME,
  'description': APP_DESCRIPTION,
  'keywords': ROOTKEYWORDS,
  'url': BASE_URL,
  'image': APP_LOGO_URL,
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/#website`,
  },
  'author': {
    '@type': 'Person',
    'name': AUTHOR_NAME,
    'url': AUTHOR_WEBSITE,
  },
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      'url': `${BASE_URL}`,
    },
  ],
}
