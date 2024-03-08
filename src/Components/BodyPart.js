import { Card } from 'react-bootstrap'
function BodyPart({ item, bodyPart, setBodyPart }) {

	return (
		<>
			<Card
				role="button"
				style={{
					margin: "0 10px",
					width: "200px",
					height: "200px",
				}}
				className={`border-light-subtle bodyPart-card ${bodyPart === item ? "border-3 border-top border-dark" : ""}`}
				onClick={() => {
					setBodyPart(item);
					window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
				}}
			>
				<Card.Body className='d-flex align-items-center justify-content-center'>
					<div className="text-center">
						<i className='bi bi-activity fs-4'></i>
						<p className='fw-bold text-capitalize'>{item}</p>
					</div>
				</Card.Body>
			</Card>
		</>
	)
}

export default BodyPart