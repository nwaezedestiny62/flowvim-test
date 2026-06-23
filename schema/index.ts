import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
// import homepage from './homepage'     // Comment out for now
// import product from './product'       // Comment out for now
import teamMember from './teamMember'

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  // homepage,
  // product,
  teamMember,
]