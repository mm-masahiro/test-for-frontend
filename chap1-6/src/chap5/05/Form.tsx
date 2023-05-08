import React from 'react'
import { Agreement } from "./Agreement";
import { InputAccount } from "./InputAccount";

export const Form: React.FC = () => {
	const [checked, setChecked] = React.useState<boolean>(false);
	const headingId = React.useId();

	return (
		<form aria-labelledby={headingId}>
			<h2 id={headingId}>新規アカウント情報</h2>
			<InputAccount />
			<Agreement
				onChange={(event) => {
					setChecked(event.currentTarget.checked)
				}}
			/>
			<div>
				<button disabled={!checked}>サインアップ</button>
			</div>
		</form>
	)
}
