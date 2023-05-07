import { render, screen } from "@testing-library/react";
import { mockPostMyAddress } from "./fetchers/mock";
import { RegisterAddress } from "./RegisterAddress";
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtils";

jest.mock('./fetchers');

const fillValuesAndSubmit = async () => {
	const contactNumber = await inputContactNumber();
	const deliveryAddress = await inputDeliveryAddress();
	const submitValues = { ...contactNumber, ...deliveryAddress };
	await clickSubmit();

	return submitValues;
}

test('成功時「登録しました」が表示される', async () => {
	const mockFn = mockPostMyAddress();
	render(<RegisterAddress />);
	const submitValues = await fillValuesAndSubmit();
	expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
	expect(screen.getByText('登録しました')).toBeInTheDocument();
})
