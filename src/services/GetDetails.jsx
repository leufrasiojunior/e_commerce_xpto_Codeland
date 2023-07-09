import ApiAxios from "../components/ApiAxios";
export const getDetails = async () => {
    const response = await ApiAxios.post("/usuarios");
    return response.data;
};
