import { axiosInstance, axiosInstanceForLocalApi } from "../../../utils/axios";

export const search = async (searchTerm) => {
  const response = await axiosInstance.get("?s=" + searchTerm);
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return {
    ...response.data,
  };
};

export const save = async (payload) => {
  if (!payload.id) {
    const response = await axiosInstanceForLocalApi.post("/", {
      nominations: [...payload.nominations],
    });
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }
    return {
      ...response.data,
    };
  } else {
    const response = await axiosInstanceForLocalApi.put("/", { ...payload });
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }
    return {
      ...response.data,
    };
  }
};
