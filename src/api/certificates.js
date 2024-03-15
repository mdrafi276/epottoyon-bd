import axiosSecure from "."

export const getAllCertificates = async () => {
      const { data } = await axiosSecure.get('/blogs')
      return data;
}
export const getAllUnions = async () =>{
      const {data} = await axiosSecure.get("/unions")
      return data;
}