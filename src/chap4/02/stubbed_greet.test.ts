import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
	...jest.requireActual("./greet"),
	sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test('本来の実装通りにgreet関数を実行する', () => {
	expect(greet("taro")).toBe("Hello! taro.");
})

test('スタブされたsayGoodBye関数を実行する', () => {
	const message = `${sayGoodBye("Taro")} See you.`;
	expect(message).toBe("Good bye, Taro. See you.")
})
