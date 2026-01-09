import instance from "../api/instance";

async function requestApi({url, method, data = {}}){
    return await instance({
        url,
        method,
        data
    })
}

export default requestApi;