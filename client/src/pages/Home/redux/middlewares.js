import { axiosInstance } from "../../../utils/axios";

export const search = async (searchTerm) => {
  const response = await axiosInstance.get("?s=" + searchTerm);
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return {
    ...response.data,
  };
};
