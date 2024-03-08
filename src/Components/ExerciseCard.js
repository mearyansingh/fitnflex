import { Badge, Card, Image, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ExerciseCard({ exercise, isHorizontalScroll }) {

	return (
		<>
			<Card
				className='overflow-hidden position-relative h-100'
				style={{
					width: isHorizontalScroll ? "200px" : "",
					margin: isHorizontalScroll ? "0 10px" : "",
				}}
			>
				<Card.Body className='p-0'>
					<Link to={`/exercise/${exercise.id}`} className='d-block text-decoration-none '>
						<Image fluid src={exercise.gifUrl} alt={exercise.name} loading="lazy" width={500} height={500} />
						<div className='position-absolute bottom-0 '>
							<Stack className='p-2' direction="horizontal" gap={2}>
								<Badge pill bg="primary" className='text-capitalize'>
									{exercise.bodyPart}
								</Badge>
								<Badge pill bg="dark" className='text-capitalize'>
									{exercise.target}
								</Badge>
							</Stack>
							<p style={{ fontSize: "14px" }} className='p-2 pt-0 mb-0 text-capitalize text-dark fw-semibold'>{exercise.name}</p>
						</div>
					</Link>
				</Card.Body>
			</Card>
		</>
	)
}

export default ExerciseCard