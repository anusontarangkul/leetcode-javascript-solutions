/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    const kelvinTemp = celsius + 273.15
    const fahrenheitTemp = celsius * 1.80 + 32.00
    return [kelvinTemp, fahrenheitTemp]
};

// time complexity: O(1)
// space complexity: O(1)

// 1. Find Kelvin from celsius: Kelvin = Celsius + 273.15
// 2. Find Farenheit from celsius: Fahrenheit = Celsius * 1.80 + 32.00
// 3. Return kelvin, fahrenheit]