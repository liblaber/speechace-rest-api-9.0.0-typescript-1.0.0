// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const validateText1OkResponse = z.lazy(() => {
  return z.object({
    detailMessage: z.string().optional(),
    shortMessage: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ValidateText1OkResponse} validateText1OkResponse
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ValidateText1OkResponse = z.infer<typeof validateText1OkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const validateText1OkResponseResponse = z.lazy(() => {
  return z
    .object({
      detail_message: z.string().optional(),
      short_message: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      detailMessage: data['detail_message'],
      shortMessage: data['short_message'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const validateText1OkResponseRequest = z.lazy(() => {
  return z
    .object({ detailMessage: z.string().nullish(), shortMessage: z.string().nullish(), status: z.string().nullish() })
    .transform((data) => ({
      detail_message: data['detailMessage'],
      short_message: data['shortMessage'],
      status: data['status'],
    }));
});
