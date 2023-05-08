type Props = {
	name: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = ({name, onSubmit}) => {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit?.(event);
			}}
		>
			<h2>アカウント情報</h2>
			<p>{name}</p>
			<div>
				<button>編集する</button>
			</div>
		</form>
	)
}
