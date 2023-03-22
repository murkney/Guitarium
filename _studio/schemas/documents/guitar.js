export default {
	title: 'Guitar',
	name: 'guitar',
	type: 'document',
	groups: [
		{
			title: 'Model',
			name: 'model'
		},
		{
			title: 'Description',
			name: 'description'
		},
		{
			title: 'Gallery',
			name: 'gallery'
		},
		{
			title: 'Price',
			name: 'price'
		}
	],
	fields: [
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: [{type: 'brand'}],
			validation: Rule => Rule.required()
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: [{ type: 'category'}],
			validation: Rule => Rule.required()
		},
		{
			title: 'Model',
			name: 'model',
			type: 'string',
			group: 'model',
			validation: Rule => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'model'
			}
		},
		{
			title: 'Color',
			name: 'color',
			type: 'string',
			options: {
				layout: 'radio',
				direction: 'horizontal',
				list: ['black', 'white', 'red', 'blue','green', 'brown', 'gray', 'golden', 'yellow']
			}
		},
		{
			title: 'String count',
			name: 'string_count',
			type: 'string',
			options: {
				layout: 'collapsible',
				list: ['4 strings', '5 strings', '6 strings', '7 strings', '8 strings']
			}
		},
		{
			title: 'Description',
			name: 'description',
			type: 'array',
			group: 'description',
			of: [{ type: 'block'}]
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
			group: 'price',
		},
		{
			title: 'Gallery',
			description: 'Upload a photo',
			name: 'gallery',
			group: 'gallery',
			type: 'array',
			of: [
				{
					type: 'image'
				}
			]
			
		}
	]
}