import axiosSecure from "."

export const getAllCertificates = async () => {
      const { data } = await axiosSecure.get('/blogs')
      return data;
}

export const getUnions = async (upazillaId) => {
      const { data } = await axiosSecure.get(`/unions?upazillaId=${upazillaId}`)
      return data;
}

export const getUpazillas = async (districtId) => {
      const { data } = await axiosSecure.get(`/upazillas?districtId=${districtId}`)
      return data;
}

export const getDistricts = async (divisionId) => {
      const { data } = await axiosSecure.get(`/districts?divisionId=${divisionId}`)
      return data;
}

export const getDivisions = async () => {
      const { data } = await axiosSecure.get("/divisions")
      return data;
}
