import { ServiceRequestHandler } from './types';

{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
/**
 * @param {Object} options
{{#each ../parameters}}
{{#if this.name}}
 * @param {{../../../../openbrace}}{{capitalize type}}{{../../../../closebrace}} options.{{name}} {{inline description}}
{{/if}}
{{/each}}
 * @throws {Error}
 * @return {Promise}
 */
export const {{../operationId}}: ServiceRequestHandler<any, any, any> = async (options) => {
  // Implement your business logic here...
  //
  // If an error happens during your business logic implementation,
  // you can just throw any Error class.

  // Currently returns a 501 not implemented. Change to a 200 level code on correct implementation
  return {
    status: 501,
    // data: '{{../operationId}} ok!'
  };
};

    {{/validMethod}}
  {{/each}}
{{/each}}
