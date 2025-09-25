import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'printPriceMatrix',
  title: 'Print Price Matrix',
  type: 'document',
  fields: [
    defineField({
      name: 'variants',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'size', type: 'string' },
          { name: 'paper', type: 'string' },
          { name: 'basePrice', type: 'number' },
          { name: 'sku', type: 'string' },
        ]
      }]
    })
  ],
})
