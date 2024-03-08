import React from 'react'
import { Pagination } from 'react-bootstrap'

function PaginationComponent({ currentPage, totalPages, onPageChange }) {

	const handlePageChange = (page) => {
		if (page !== currentPage) {
			onPageChange(page);
		}
	};

	return (
		<>
			<Pagination className='my-5 d-flex align-items-center justify-content-center'>
				<Pagination.First onClick={() => handlePageChange(1)} />
				<Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
				{[...Array(totalPages)].map((_, index) => (
					<Pagination.Item
						key={index + 1}
						active={index + 1 === currentPage}
						onClick={() => handlePageChange(index + 1)}
					>
						{index + 1}
					</Pagination.Item>
				))}
				<Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
				<Pagination.Last onClick={() => handlePageChange(totalPages)} />
			</Pagination>
		</>
	)
}

export default PaginationComponent