import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Col, InputGroup } from 'react-bootstrap'
import { exerciseOptions, fetchData } from '../Utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {

	/**Initial state */
	const [search, setSearch] = useState('')
	const [bodyParts, setBodyParts] = useState([]);

	/**Lifecycle method */
	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
			setBodyParts(['all', ...bodyPartsData])
		}
		fetchExercisesData()
	}, [])

	/** Handle Search functionality */
	const handleSearch = async () => {
		if (search) {
			const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

			const searchedExercises = exerciseData.filter(
				(exercise) => exercise.name.toLocaleLowerCase().includes(search)
					|| exercise.target.toLocaleLowerCase().includes(search)
					|| exercise.equipment.toLocaleLowerCase().includes(search)
					|| exercise.bodyPart.toLocaleLowerCase().includes(search)
			)
			setSearch('')
			setExercises(searchedExercises)
		}
	}

	return (
		<>
			<section className="py-5">
				<Container>
					<p className='text-center fw-bold fs-3'>Awesome Exercises You <br />Should Know</p>
					<Col lg={8} className='text-center mx-auto'>
						<InputGroup className="mb-3">
							<Form.Control
								placeholder="Search Exercises"
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
								className=''
							/>
							<Button variant="dark" onClick={handleSearch}>
								Search
							</Button>
						</InputGroup>
					</Col>
					<div className='mt-5'>
						<HorizontalScrollBar
							data={bodyParts}
							bodyPart={bodyPart}
							setBodyPart={setBodyPart}
							isBodyParts
						/>
					</div>
				</Container>
			</section >
		</>
	)
}

export default SearchExercises