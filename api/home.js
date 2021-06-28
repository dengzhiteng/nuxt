import request from "./request";

export const getUser = () => {
  return request({
    url: "/user",
    method: "get"
  });
};
