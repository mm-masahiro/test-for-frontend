import { add } from "./index";

test("add: 1 + 2は3", () => {
	expect(add(1, 2)).toBe(3);
});
