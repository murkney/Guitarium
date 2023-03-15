import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';

export default {
	title: 'Guitarium',

	projectId: '1h2u4zsq',
	dataset: 'production',

	plugins: [
		deskTool(), 
		visionTool()
	],

	schema: {
		types: schemas,
	},
};
