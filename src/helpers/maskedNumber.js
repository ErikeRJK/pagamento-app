export default function maskedNumber(number = "00000000000000"){

    const cleaned = number.replace(/\s+/g, "") 

    return `•••• •••• •••• ${cleaned.slice(-4)}`
}