import { useState } from 'react';
import urlService from '../services/urlService';

const Form = (): JSX.Element => {
	const [newUrl, setNewUrl] = useState<string>('');
	const [newSlug, setNewSlug] = useState<string>('');

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log('Form submitted');
		try {
			const url = await urlService.create({ original: newUrl, slug: newSlug });
			console.log(url);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="url"
					placeholder="Enter URL"
					onChange={(e) => setNewUrl(e.target.value)}
				/>
				<input
					type="text"
					name="slug"
					placeholder="Enter slug"
					onChange={(e) => setNewSlug(e.target.value)}
				/>
				<button type="submit">Shorten</button>
			</form>
		</div>
	);
};

export default Form;
