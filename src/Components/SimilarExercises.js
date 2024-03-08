import Container from 'react-bootstrap/Container'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
	return (
		<>
			<Container className='py-5'>
				<h3 className='mb-4'>Exercises that target the same muscle group</h3>
				<div>
					{targetMuscleExercises.length ?
						<HorizontalScrollBar
							data={targetMuscleExercises}

						/>
						:
						<Loader />
					}
				</div>
				<h3 className='mb-4 mt-5'>Exercises that target the same equipment</h3>
				<div>
					{equipmentExercises.length ?
						<HorizontalScrollBar
							data={equipmentExercises}
						/>
						:
						<Loader />
					}
				</div>
			</Container>
		</>
	)
}

export default SimilarExercises