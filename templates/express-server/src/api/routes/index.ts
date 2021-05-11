import express from 'express';

{{#each @root.swagger.endpoints}}
import {{camelCase this}}Routes from './{{this}}';
{{/each}}

/**
 * Define each of the routes from their base paths and export the router 
 */
const router = express.Router();
{{#each @root.swagger.endpoints}}
{{#endsWith @root.swagger.basePath '/'}}
router.use('{{@root.swagger.basePath}}{{..}}',{{camelCase ..}}Routes);
{{else}}
router.use('{{@root.swagger.basePath}}/{{..}}',{{camelCase ..}}Routes);
{{/endsWith}}
{{/each}}

export default router;
