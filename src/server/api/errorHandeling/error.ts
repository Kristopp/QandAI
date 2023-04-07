import { TRPCError } from '@trpc/server/dist/error/TRPCError';
import { getHTTPStatusCodeFromError } from '@trpc/server/http';
 
// Example error you might get if your input validation fails
const error: TRPCError = {
  name: 'TRPCError',
  code: 'BAD_REQUEST',
  message: '"password" must be at least 4 characters',
};

const inputError: TRPCError = {
    name: 'TRPCError',
    code: 'BAD_REQUEST',
    message: 'input validation failed',
  };
 
if (inputError instanceof TRPCError) {
  const httpCode = getHTTPStatusCodeFromError(error);
  console.log(httpCode); // 400
}