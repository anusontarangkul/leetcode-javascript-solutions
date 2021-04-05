const average = require("./1491")

test("The average from '[4000,3000,1000,2000]' is '2500'", () => {
    expect(average([4000, 3000, 1000, 2000])).toBe(2500);
});

test("The average from '[1000,2000,3000]' is '2000'", () => {
    expect(average([1000, 2000, 3000])).toBe(2000);
});

test("The average from '[6000,5000,4000,3000,2000,1000]' is '3500'", () => {
    expect(average([6000, 5000, 4000, 3000, 2000, 1000])).toBe(3500);
});

test("The average from '[8000,9000,2000,3000,6000,1000]' is '4750'", () => {
    expect(average([8000, 9000, 2000, 3000, 6000, 1000])).toBe(4750);
});
