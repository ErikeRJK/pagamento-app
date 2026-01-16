export function formatCardNumber(value){

    return value.replace(/(.{4})/g, "$1 ").trim()

}