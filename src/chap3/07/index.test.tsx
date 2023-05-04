import { wait } from "."

describe("Promiseをreturnする書き方", () => {
	test("promiseを返し、thenに渡す関数内にアサーションを書く", () => {
		return wait(50).then((duration) => {
			expect(duration).toBe(50);
		})
	});

	test("resolveを使用したアサーションをreturnする方法", () => {
		return expect(wait(50)).resolves.toBe(50);
	});
})

describe("async/awaitを使った書き方", () => {
	test("テスト関数をasync関数とし、関数内でPromiseが解決するのを待つ方法", async () => {
		await expect(wait(50)).resolves.toBe(50);
	})

	test('検証値のPromiseが解決するのを待ってから、アサーションに展開する方法', async () => {
		expect(await wait(50)).toBe(50);
	})
});


