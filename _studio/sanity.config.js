import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './structure/settings.js';

export default {
	title: 'Guitarium',

	projectId: '1h2u4zsq',
	dataset: 'production',

	plugins: [
		deskTool(),
		
		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}),

		visionTool()
	],

	schema: {
		types: schemas,
	},
};
