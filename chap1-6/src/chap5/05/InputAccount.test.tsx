import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputAccount } from './InputAccount';

// テストファイルではじめにセットアップ
const user = userEvent.setup();

test('メールアドレス入力欄', async () => {
	render(<InputAccount />);

	// メールアドレス入力欄を首藤
	const textbox = screen.getByRole('textbox', { name: 'メールアドレス' });
	const value = 'taro.tanaka@example.com';

	// メールアドレス入力欄にvalueを入力
	await user.type(textbox, value);

	expect(screen.getByDisplayValue(value)).toBeInTheDocument();
})

test('パスワード入力欄', async () => {
	render(<InputAccount />);

	const passwordInputBox = screen.getByPlaceholderText('8文字以上で入力');
	const value = 'abcd1234';

	await user.type(passwordInputBox, value);

	expect(screen.getByDisplayValue(value)).toBeInTheDocument();
})
