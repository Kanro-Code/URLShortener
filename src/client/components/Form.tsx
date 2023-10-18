import { useState } from 'react';
import urlService from '../services/urlService';

const Form = (): JSX.Element => {
	const [newUrl, setNewUrl] = useState<string>('');

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log('Form submitted');
		urlService.create(newUrl);
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
				<button type="submit">Shorten</button>
			</form>
		</div>
	);
};

export default Form;
