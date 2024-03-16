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

export const uploadImage = async (image) => {
      //will take the full image variable as an argument
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axiosSecure.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBbApiKey}`,
          formData
      );

      return data;
  };
