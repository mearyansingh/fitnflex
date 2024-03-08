import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';

const Home = lazy(() => import('./Pages/Home'));
const ExerciseDetail = lazy(() => import('./Pages/ExerciseDetail'));
const About = lazy(() => import('./Pages/About'));
function App() {

	return (
		<div className="App">
			<main className='d-flex flex-column min-vh-100'>
				<Header />
				<div className='flex-grow-1'>
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
						<Route
							path="/about"
							element={
								<Suspense fallback={<Loader />}>
									<About />
								</Suspense>
							}
						/>
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
