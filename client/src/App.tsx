import { useState } from 'react';
import urlService from './services/urlService';
import { AxiosError } from 'axios';

function App() {
	const [newUrl, setNewUrl] = useState('');
	const [newSlug, setNewSlug] = useState('');
	const [error, setNewError] = useState('');

	const errorHandler = (err: unknown) => {
		if (err instanceof AxiosError && err.response) {
			setNewError(err.response.data.error);
		} else {
			console.error(err);
		}
	};

	const addUrl = (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			urlService.create({ url: newUrl, slug: newSlug });
		} catch (err: unknown) {
			errorHandler(err);

		}
	};

	const ErrorPopup = ({ err }: { err: string }): JSX.Element => {
		return (
			<div className="error">
				<p>{err}</p>
			</div>
		);
	};

	return (
		<>
			<h2>add a new</h2>
			{error && <ErrorPopup err={error} />}

			<form onSubmit={addUrl}>
				<div>
					url:
					<input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
					<br />
					slug (optional):
					<input value={newSlug} onChange={(e) => setNewSlug(e.target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
}

export default App;
