export default {
	title: 'Guitar',
	name: 'guitar',
	type: 'document',
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
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block'}]
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Gallery',
			description: 'Upload a photo',
			name: 'gallery',
			type: 'array',
			of: [
				{
					title: 'Image',
					name: 'image',
					type: 'image'
				}
			]
			
		}
	]
}