import { greet } from "./greet";

jest.mock("./greet");

test('モックされたgreet関数を実行する', () => {
	expect(greet("Taro")).toBe(undefined)
})
