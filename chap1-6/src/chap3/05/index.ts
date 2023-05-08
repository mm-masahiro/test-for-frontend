export class HttpError extends Error {}
export class RangeError extends Error {}


export const add = (a: number, b: number): number => {
	checkRange(a);
	checkRange(b);
	
	const sum: number = a + b;

	if (sum > 100) {
		return 100;
	}
	return sum;
};

export const checkRange = (value: number) => {
	if (value < 0 || value > 100) {
		throw new RangeError("入力値は0~100の間で入力してください")
	}
}
