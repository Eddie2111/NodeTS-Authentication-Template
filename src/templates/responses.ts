import { MessageProps } from "./../types/response.d";

export const successResponse: MessageProps = {
  status: 200,
  message: "Request successful",
  data: {},
};

export const failureResponse = {
  status: 400,
  message: "Request failed",
  data: {},
};
