test('Sum of 14 and 9 is equal to 23', () => { 
    const { sum } = require('./app.js'); 
    let total = sum(14, 9);

    expect(total).toBe(23);
})

test("1 Euro should be 1.09 Dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    let expected = fromEuroToDollar(1)

     expect(expected).toBe(1.09);
})

test("1 Dolar should be 146.66 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    let expected = fromDollarToYen(1) 

    expect(expected).toBe(146.66);  
})

test("1 Yen should be 0.0053 Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    let expected = fromYenToPound(1)

     expect(expected).toBe(0.0053);
})

;