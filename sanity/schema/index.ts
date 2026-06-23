import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import homepage from './homepage'
import product from './product'
import teamMember from './teamMember'

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homepage,
  product,
  teamMember,
  // We'll add blog, about, etc. later
]