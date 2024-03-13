import axiosSecure from "."

export const getAllCertificates = async () => {
      const { data } = await axiosSecure.get('/blogls')
      return data;
}