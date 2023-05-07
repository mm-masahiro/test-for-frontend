import { fireEvent, render, screen } from '@testing-library/react';
import { Agreement } from './Agreement';

test("fieldsetのアクセシブルネームはlegendを引用している", () => {
	render(<Agreement />);
	expect(
		screen.getByRole('group', { name: "利用規約の同意" })
	).toBeInTheDocument();
})
