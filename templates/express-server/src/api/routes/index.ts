import express from 'express';

{{#each @root.swagger.endpoints}}
import {{this}}Routes from './{{this}}';
{{/each}}

/**
 * Define each of the routes from their base paths and export the router 
 */
const router = express.Router();
{{#each @root.swagger.endpoints}}
{{#endsWith @root.swagger.basePath '/'}}
router.use('{{@root.swagger.basePath}}{{..}}',{{..}}Routes ));
{{else}}
router.use('{{@root.swagger.basePath}}/{{..}}',{{..}}Routes ));
{{/endsWith}}
{{/each}}

export default router;
