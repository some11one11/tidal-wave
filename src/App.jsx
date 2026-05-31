import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './firstPage.jsx';
import Home from './Home.jsx';
import { AudioProvider } from './AudioContext';
export default function App() {
	return (
		<AudioProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FirstPage />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</AudioProvider>
	);
}

