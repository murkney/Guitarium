export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: [{ type: 'category'}]
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
			title: 'Photo',
			description: 'Upload a photo of the bass',
			name: 'photo',
			type: 'image'
		}
	]
}