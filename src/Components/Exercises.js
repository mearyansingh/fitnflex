import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../Utils/FetchData';
import { Col, Container, Row } from 'react-bootstrap';
import ExerciseCard from './ExerciseCard';
import PaginationComponent from './PaginationComponent';
import Loader from './Loader';
function Exercises({ exercises, setExercises, bodyPart }) {

	/**Initial state */
	const [currentPage, setCurrentPage] = useState(1);
	const [exercisesPerPage] = useState(6);

	/**Pagination  */
	const totalItems = exercises.length;
	const totalPages = Math.ceil(totalItems / exercisesPerPage);
	const indexOfLastExercise = currentPage * exercisesPerPage;//
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;//
	const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);//

	/**Lifecycle hook */
	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];
			if (bodyPart === 'all') {
				exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			} else {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
			}

			setExercises(exercisesData);
		};

		fetchExercisesData();
	}, [bodyPart]);

	/**Function to handle the page change */
	const handlePageChange = (page) => {
		setCurrentPage(page);
		window.scrollTo({ top: 1800, behavior: 'smooth' });
	};

	// if (!currentExercises.length) return <Loader />;

	return (
		<>
			<Container>
				<h3 className='mb-4'>Showing results</h3>
				<Row className='g-3'>
					{currentExercises.map((exercise) => (
						<Col md={4} lg={3} key={exercise.id} >
							<ExerciseCard exercise={exercise} />
						</Col>
					))}
				</Row>
				{/* Render the pagination component */}
				{totalPages > 1 && (
					<PaginationComponent
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				)}
			</Container>

		</>
	)
}

export default Exercises