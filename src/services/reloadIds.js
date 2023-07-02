import ApiAxios from "../components/ApiAxios";
export const getIds = async () => {
  const response = await ApiAxios.get("/produtos");
  return response.data;
};
