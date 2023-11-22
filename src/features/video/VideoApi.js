import axiosInstance from "../../utilities/axios";

export const getVideo = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};
