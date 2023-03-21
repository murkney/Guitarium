export default {
	title: 'Brand',
	name: 'brand',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'History',
			name: 'history',
			type: 'array',
			of: [{ type: 'block'}]
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image'
		}
	]
}