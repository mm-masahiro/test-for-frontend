import { add, RangeError } from ".";

test('例外が発生する', () => {
	expect(() => add(-10, 110)).toThrow(RangeError);
})
