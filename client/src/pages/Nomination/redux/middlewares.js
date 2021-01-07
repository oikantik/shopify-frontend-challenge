import { axiosInstanceForLocalApi } from "../../../utils/axios";

export const get = async (id) => {
  console.log(id);
  const response = await axiosInstanceForLocalApi.get("/" + id);
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return {
    ...response.data,
  };
};
