import {Home} from './Components/home/Home';
import {LayoutSt} from './Components/home/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/layout" element={<LayoutSt />} />
		</Routes>
	</BrowserRouter>);
}

export default App;
