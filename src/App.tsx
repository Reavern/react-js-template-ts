import React from 'react';
import Routes from './Routes';
import Store from './store/Store';

const App = () => {
	return (
		<Store>
			<Routes />
		</Store>
	);
}

export default App;
