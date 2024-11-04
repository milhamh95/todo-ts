export interface Response<T> {
  message: string;
  data: T;
}

export const createResponse = <T>(
  data: T,
  message = "success"
): Response<T> => {
  return {
    message: message,
    data: data,
  };
};
