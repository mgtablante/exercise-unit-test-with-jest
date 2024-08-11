const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (euro) => {
    return euro * 1.09;
}

const fromDollarToYen = (dolar) => {
    return dolar * 146.66
} 

const fromYenToPound = (yen) => {
    return yen * 0.0053
} 

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };
