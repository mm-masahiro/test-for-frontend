import * as Fetchers from "./fetchers";
import { getMyArticlesData, httpError } from "./fetchers/fixtures"

const mockGetMyArticles = (status = 200) => {
	if (status > 299) {
		return jest.spyOn(Fetchers, 'getMyArticles').mockRejectedValueOnce(httpError);
	}

	return jest.spyOn(Fetchers, 'getMyArticles').mockResolvedValueOnce(getMyArticlesData);
}
