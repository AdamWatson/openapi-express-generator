import express from 'express';
import * as {{camelCase operation_name}}Service from '../services/{{operation_name}}';

const router = express.Router();

{{#each headOperation}}
  {{#each this.path}}
    {{#validMethod @key}}
/**
 {{#each ../descriptionLines}}
 * {{{this}}}
 {{/each}}
 */
router.{{@key}}('{{../../subresource}}', async (request, response, next) => {
  // Extract the payload, parameters, and user info from the request object
  const payload = request.body;
  const parameters = {
  {{#each ../parameters}}
    {{#equal this.in "query"}}
      {{{quote ../name}}}: request.query['{{../name}}'],
    {{/equal}}
    {{#equal this.in "path"}}
      {{{quote ../name}}}: request.params['{{../name}}'],
    {{/equal}}
    {{#equal this.in "header"}}
      {{{quote ../name}}}: request.header['{{../name}}'],
    {{/equal}}
  {{/each}}
  };
  const user = request.user;

  const options = {
      payload,
      parameters,
      user,
  }

  try {
    const result = await {{camelCase ../../../operation_name}}Service.{{../operationId}}(options);
    response.status(result.status || 200).send(result.data);
  } catch (err) {
      next(err);
  }
});
    {{/validMethod}}
  {{/each}}
{{/each}}

{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
/**
 {{#each ../descriptionLines}}
 * {{{this}}}
 {{/each}}
 */
router.{{@key}}('{{../../subresource}}', async (request, response, next) => {
  // Extract the payload, parameters, and user info from the request object
  const payload = request.body;
  const parameters = {
  {{#each ../parameters}}
    {{#equal this.in "query"}}
      {{{quote ../name}}}: request.query['{{../name}}'],
    {{/equal}}
    {{#equal this.in "path"}}
      {{{quote ../name}}}: request.params['{{../name}}'],
    {{/equal}}
    {{#equal this.in "header"}}
      {{{quote ../name}}}: request.header['{{../name}}'],
    {{/equal}}
  {{/each}}
  };
  const user = request.user;

  const options = {
      payload,
      parameters,
      user,
  }

  try {
    const result = await {{camelCase ../../../operation_name}}Service.{{../operationId}}(options);
    response.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

    {{/validMethod}}
  {{/each}}
{{/each}}

export default router;
