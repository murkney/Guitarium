export default {
	title: 'In stock',
	name: 'in_stock',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Available',
			name: 'available',
			type: 'reference',
			to: [{type: 'guitar'}]
		},
	]
}