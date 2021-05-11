/**
 * Options passed to a service method with all the necessary request info piped in
 */
export type ServiceRequestOptions<
  ParametersType extends {},
  PayloadType extends any
> = {
  user?: any; // TODO
  parameters?: ParametersType;
  payload?: PayloadType;
};

/**
 * A service response, to be returned through the API response object.
 * This can include an HTTP status code indicating success or failure,
 * some data to return to the user, and a message indicating potential problems.
 */
export type ServiceResponse<T> = Promise<{
  status?: number;
  data?: T;
  message?: string;
}>;

/**
 * Represents a service request handler, with generic inputs and outputs.
 * The inputs and outputs are configurable and should be typed in when implementing the service.
 */
export type ServiceRequestHandler<
  ParametersType extends {},
  PayloadType extends any,
  OutputType extends any
> = (options: ServiceRequestOptions<ParametersType, PayloadType>) => ServiceResponse<OutputType>;
