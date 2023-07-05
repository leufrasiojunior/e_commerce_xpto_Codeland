import ApiAxios from "../components/ApiAxios";
export const getDetails = async () => {
    const response = await ApiAxios.get("/produtos/{props.id}");
    return response.data;
};
