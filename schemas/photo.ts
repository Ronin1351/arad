import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'alt', type: 'string' }),
    defineField({ name: 'imageAsset', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'exif',
      type: 'object',
      fields: [
        { name: 'camera', type: 'string' },
        { name: 'lens', type: 'string' },
        { name: 'focalLength', type: 'string' },
        { name: 'aperture', type: 'string' },
        { name: 'shutter', type: 'string' },
        { name: 'iso', type: 'string' },
      ],
    }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'shootDate', type: 'date' }),
    defineField({ name: 'visibility', type: 'string', options: { list: ['public','private','proof'] } }),
    defineField({ name: 'sellable', type: 'boolean', initialValue: false }),
    defineField({ name: 'priceMatrixRef', type: 'reference', to: [{ type: 'printPriceMatrix' }] }),
  ],
})
