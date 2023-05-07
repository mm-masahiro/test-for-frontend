import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

const user = userEvent.setup();

test("サインアップボタンは非活性", () => {
	render(<Form />);
	expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
});

test('チェックボックスにチェックがついていると、サインアップボタンが活性化する', async () => {
	render(<Form />);
	await user.click(screen.getByRole("checkbox"));
	expect(screen.getByRole('button', { name: 'サインアップ' })).toBeEnabled();
})

