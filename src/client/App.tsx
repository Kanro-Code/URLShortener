import { useState } from 'react';
import Form from './components/Form';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<Form />
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

export default App;
