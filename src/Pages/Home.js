import React, { useState } from 'react'
import Exercises from '../Components/Exercises'
import SearchExercise from '../Components/SearchExercises'
import HeroBanner from '../Components/HeroBanner'

function Home() {
	/**Initial state */
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState("all");

	return (
		<>
			<HeroBanner />
			<SearchExercise
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				exercises={exercises}
			/>
		</>
	)
}

export default Home