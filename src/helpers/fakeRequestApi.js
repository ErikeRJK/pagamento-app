import dataMock from "../mocks/data";

export function fakeRequestApi({ url, method = {} }){
    const mock = dataMock.find(mock => mock.url === url && mock.methods[method])

    if(!mock){
        throw new Error(`Não foi possivel encontrar a rota ${url}`)
    }

    return mock.methods[method]
}