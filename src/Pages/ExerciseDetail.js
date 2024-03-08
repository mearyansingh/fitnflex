import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { fetchData, exerciseOptions, youtubeOptions } from '../Utils/FetchData'

function ExerciseDetail() {

	/**Initial state */
	const [exerciseDetail, setExerciseDetail] = useState({})
	const [exerciseVideos, setExerciseVideos] = useState([])
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
	const [equipmentExercises, setEquipmentExercises] = useState([])
	//useParams hook
	const { id } = useParams()

	/**Lifecycle method */
	useEffect(() => {
		const fetchExercisesData = async () => {
			//exercise details
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
			const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
			const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetailData)
			//youtube video
			const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
			setExerciseVideos(exerciseVideosData.contents)
			//target Muscle Exercises Data
			const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
			setTargetMuscleExercises(targetMuscleExercisesData)
			//target Muscle equipment Data
			const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
			setEquipmentExercises(equipmentExercisesData)
		}
		fetchExercisesData()
	}, [id])

	if (!exerciseDetail) return <div>No Data</div>;

	return (
		<>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
			<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
		</>
	)
}

export default ExerciseDetail