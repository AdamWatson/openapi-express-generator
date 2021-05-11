import express from 'express';

{{#each @root.swagger.endpoints}}
import {{..}}Routes from './{{..}}';
{{/each}}

/**
 * Define each of the routes from their base paths and export the router 
 */
const router = express.Router();
{{#each @root.swagger.endpoints}}
router.use('{{@root.swagger.basePath}}{{..}}',{{..}}Routes ));
{{/each}}

export default router;
