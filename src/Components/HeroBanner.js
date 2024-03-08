import React from 'react'

function HeroBanner() {
	return (
		<>
			<section className="bsb-hero-5 px-3 bsb-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "bottom" }}>
				<div className="container">
					<div className="row justify-content-md-center align-items-center">
						<div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
							<h2 className="display-1 text-white text-center fw-bold mb-4">Fitness Club</h2>
							<p className="text-center fs-3 fw-semibold  text-white">Sweat, Smile</p>
							<p className="text-center fs-3 fw-semibold text-white">and Repeat</p>
							<p className="lead text-white text-center mb-5 d-flex justify-content-sm-center">
								<span className="col-12 col-sm-10 col-md-8 col-xxl-7">Checkout the most effective exercises</span>
							</p>
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
								<button type="button" className="btn bsb-btn-2xl btn-outline-light">Explore Exercises</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HeroBanner