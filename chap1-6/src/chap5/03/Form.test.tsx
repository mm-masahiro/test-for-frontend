import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';

test("名前の表示", () => {
	render(<Form name='taro' />);
	expect(screen.getByText('taro')).toBeInTheDocument();
})

test("ボタンの表示", () => {
	render(<Form name='taro' />);
	expect(screen.getByRole("button")).toBeInTheDocument();
})

test("見出しの表示", () => {
	render(<Form name='taro' />);
	expect(screen.getByRole("heading")).toBeInTheDocument();
	expect(screen.getByRole("heading")).toHaveTextContent('アカウント情報');
})

// イベントハンドラーの呼び出しテスト
test('ボタンをクリックすると、イベントハンドラーが実行される', () => {
	const mockFn = jest.fn();
	render(<Form name='taro' onSubmit={mockFn} />);
	fireEvent.click(screen.getByRole('button'));
	expect(mockFn).toHaveBeenCalled();
})
