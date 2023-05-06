import type { Article, Articles, HttpError } from "./types";

export const httpError: HttpError = {
  err: { message: "internal server error" },
};

export const getMyArticlesData: Articles = {
	articles: [
		{
			id: 'how-to-testing-with-typescript',
			createdAt: '2022-07-19T22:38:41.005Z',
			tags: ['testing'],
			title: 'TSを使ったテストの書き方',
			body: 'テストを書く時、TSを使うことでテストとの保守性が向上します',
		},
		{
			id: 'nextjs-link-component',
			createdAt: '2022-07-19T22:38:41.005Z',
			tags: ['nextjs'],
			title: 'Next.js',
			body: 'Next.js',
		},
		{
			id: 'react-component-testing-with-jest',
			createdAt: '2022-07-19T22:38:41.005Z',
			tags: ['testing', 'react'],
			title: 'JEST',
			body: 'JEST',
		},
	]
}
