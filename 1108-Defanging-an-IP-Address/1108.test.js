const defangIPaddr = require("./1108")

test("The defanged IP address for '1.1.1.1' is '1[.]1[.]1[.]1'", () => {
    expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
});

test("The defanged IP address for '255.100.50.0' is '255[.]100[.]50[.]0'", () => {
    expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
});