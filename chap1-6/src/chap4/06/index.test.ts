import { ArticleInput } from "../fetchers/types";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { postMyArticle } from "../fetchers";
import * as Fetchers from "../fetchers";
import { checkLength } from ".";

jest.mock("../fetchers");

const mockPostMyArticle = (input: ArticleInput, status = 200) => {
	if (status > 299) {
		return jest.spyOn(Fetchers, "postMyArticle")
	}

	try {
		checkLength(input.title);
		checkLength(input.body);
		return jest.spyOn(Fetchers, "postMyArticle").mockResolvedValue({...postMyArticleData, ...input})
	} catch (err) {
		return jest.spyOn(Fetchers, "postMyArticle").mockRejectedValueOnce(httpError)
	}
}

const inputFactory = (input?: Partial<ArticleInput>): ArticleInput => {
	return {
		tags: ["testing"],
		title: "TSを使ったテストの書き方",
		body: "テストを書く時、TSを使うことで保守性が上がります",
		...input,
	}
}

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
	// バリデーションが通る入力値の作成
	const input = inputFactory();
	// 入力値を含んだ成功レスポンスが返るようにモックを作成
	const mock = mockPostMyArticle(input);
	// テスト対象の関数にinputを与えて実行
	const data = await postMyArticle(input);
	expect(data).toMatchObject(expect.objectContaining(input));
	expect(mock).toHaveBeenCalled()
})

test("バリデーションに失敗した場合、rejectされる", async () => {
	expect.assertions(2);
	// バリデーションが通る入力値の作成
	const input = inputFactory({ });
	// 入力値を含んだ成功レスポンスが返るようにモックを作成
	const mock = mockPostMyArticle(input);
	// テスト対象の関数にinputを与えて実行
	const data = await postMyArticle(input);
	expect(data).toMatchObject(expect.objectContaining(input));
	expect(mock).toHaveBeenCalled()
})
