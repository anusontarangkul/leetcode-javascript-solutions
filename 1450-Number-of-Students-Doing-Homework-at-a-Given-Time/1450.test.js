const busyStudent = require("./1450")

test("With the startTime of [1,2,3], endTime of [3,2,7], and a queryTime of 4, there is 1 student doing the homework at queryTime", () => {
    expect(busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe(1);
});

test("With the startTime of [4], endTime of [4], and a queryTime of 4, there is 1 student doing the homework at queryTime", () => {
    expect(busyStudent([4], [4], 4)).toBe(1);
});

test("With the startTime of [4], endTime of [4], and a queryTime of 5, there are 0 students doing the homework at queryTime", () => {
    expect(busyStudent([4], [4], 5)).toBe(0);
});

test("With the startTime of [1,1,1,1], endTime of [1,3,2,4], and a queryTime of 7, there are 0 students doing the homework at queryTime", () => {
    expect(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7)).toBe(0);
});

test("With the startTime of [9,8,7,6,5,4,3,2,1], endTime of [10,10,10,10,10,10,10,10,10], and a queryTime of 5, there are 5 students doing the homework at queryTime", () => {
    expect(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5)).toBe(5);
});