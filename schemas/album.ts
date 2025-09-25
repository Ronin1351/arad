import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', type: 'string', options: { list: ['Street','Travel'] } }),
    defineField({ name: 'photos', type: 'array', of: [{ type: 'reference', to: [{ type: 'photo' }] }] }),
    defineField({ name: 'isPrivate', type: 'boolean', initialValue: false }),
    defineField({
      name: 'proof',
      type: 'object',
      fields: [
        { name: 'clientName', type: 'string' },
        { name: 'clientEmail', type: 'string' },
        { name: 'accessCode', type: 'string' },
        { name: 'pin', type: 'string' },
        { name: 'dueDate', type: 'date' },
        { name: 'maxSelections', type: 'number' },
      ],
    }),
  ],
})
