import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import BodyPartImg from '../Assets/Images/exercise1.svg'
import TargetImg from '../Assets/Images/exercise2.jpg'
import EquipmentImg from '../Assets/Images/exercise3.jpg'

function Detail({ exerciseDetail }) {

	//Destructure
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

	//Image data
	const extraDetail = [
		{
			icon: BodyPartImg,
			name: bodyPart
		},
		{
			icon: TargetImg,
			name: target
		},
		{
			icon: EquipmentImg,
			name: equipment
		}
	]

	return (
		<>
			<Container className='py-5 pt-md-0'>
				<Row>
					<Col lg={8}>
						<Image src={gifUrl} alt={name} loading="lazy" className='w-100 h-100 object-fit-cover' />
					</Col>
					<Col lg={4} className='d-flex align-items-center flex-column justify-content-center'>
						<h1 className="text-capitalize mb-4">{name}</h1>
						<p className="mb-5">Exercises keep you strong. {name} is one of the best exercise to target your {target}. It will help you improve your mood and gain energy.</p>
						{extraDetail.map((item) => (
							<Stack key={item?.icon} direction="horizontal" gap={2}>
								<Image fluid src={item.icon} width={80} height={80} />
								<p className='mb-0 text-capitalize fw-semibold'>{item.name}</p>
							</Stack>
						))}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Detail