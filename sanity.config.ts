import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import photo from './schemas/photo'
import album from './schemas/album'
import printPriceMatrix from './schemas/printPriceMatrix'

export default defineConfig({
  name: 'default',
  title: 'Photography Studio',
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [photo, album, printPriceMatrix],
  },
})
