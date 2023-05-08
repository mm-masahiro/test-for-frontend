import { mock } from "node:test";
import { greet } from "./greet";

test("mocked func is executed", () => {
	const mockFn = jest.fn();
	mockFn();
	expect(mockFn).toBeCalled();
});

test("mocked func is not executed", () => {
	const mockFn = jest.fn();
	expect(mockFn).not.toBeCalled();
});

test('mock func is executed in other function', () => {
	const mockFn = jest.fn();
	const greet = () => {
		mockFn();
	}
	greet();
	expect(mockFn).toHaveBeenCalledTimes(1)
})

test('mock func is record parameter', () => {
	const mockFn = jest.fn();
	const greet = (message: string) => {
		mockFn(message); // 引数を持ってい実行されている
	} 
	greet("Hello"); // "Hello"を持って実行されたことがmockFnに記録される
	expect(mockFn).toHaveBeenCalledWith("Hello");
})

test('mock func can use parameter of test func', () => {
	const mockFn = jest.fn();
	greet('Jiro', mockFn);
	expect(mockFn).toHaveBeenCalledWith("Hello! Jiro");
})
