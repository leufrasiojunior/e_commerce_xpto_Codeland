import ApiAxios from "../components/ApiAxios";
export const getIds = async (id) => {
  const newID = id ? `/produtos/${id}` : "/produtos";
  const response = await ApiAxios.get(newID);
  return response.data;
};
