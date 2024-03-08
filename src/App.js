import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';

const Home = lazy(() => import('./Pages/Home'));
const ExerciseDetail = lazy(() => import('./Pages/ExerciseDetail'));
function App() {

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<Home />
						</Suspense>
					} />
				<Route
					path="/exercise/:id"
					element={
						<Suspense fallback={<Loader />}>
							<ExerciseDetail />
						</Suspense>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
