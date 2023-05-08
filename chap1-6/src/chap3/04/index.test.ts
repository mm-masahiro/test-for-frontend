import { add, sub } from ".";

describe("add function", () => {
	test("二つの引数の和が返ってくる", () => {
		expect(add(50, 50)).toBe(100);
	});
	
	test("70 + 80をしても、上限は100", () => {
		expect(add(70, 80)).toBe(100);
	});
});

describe("sub function", () => {
	test("二つの引数の差が返ってくる", () => {
		expect(sub(51, 50)).toBe(1);
	});
	
	test("70 - 80をしても、下限は0", () => {
		expect(sub(70, 80)).toBe(0);
	});
});
