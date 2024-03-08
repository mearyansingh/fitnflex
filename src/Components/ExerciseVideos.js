import React from 'react'
import { Badge, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap'

function ExerciseVideos({ exerciseVideos, name }) {

	return (
		<>
			<Container className='py-3'>
				<h2 className='mb-4'>Watch <span className='text-capitalize' style={{ color: "blue" }}> {name} </span>exercise videos</h2>
				<Row className='g-4'>
					{exerciseVideos?.slice(0, 6).map((item, index) => (
						<Col lg={4} key={index} >
							<Card
								as="a"
								href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
								target='_blank'
								rel='noreferrer'
								className='overflow-hidden'
							>
								<Card.Body className='p-0 position-relative'>
									<Image fluid src={item.video.thumbnails[0].url} alt={item.video.title} className='w-100 h-100' />
									<Badge bg="dark" className=' m-1 position-absolute bottom-0 end-0'>{item.video.lengthText}</Badge>
								</Card.Body>
							</Card>
							<p className='my-1 lh-1  text-truncate'>{item.video.title}</p>
							<Stack direction="horizontal" className='flex-wrap' gap={2}>
								<span style={{ fontSize: "14px" }}>{item.video.channelName}</span>
								<span style={{ fontSize: "14px" }}>{item.video.publishedTimeText}</span>
								<span style={{ fontSize: "14px" }}>{item.video.viewCountText}</span>
							</Stack>
						</Col>
					))}
				</Row>
			</Container>

		</>
	)
}

export default ExerciseVideos