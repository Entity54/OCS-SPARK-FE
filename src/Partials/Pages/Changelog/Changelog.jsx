import React from 'react'

const Changelog = () => {
  return (
        <div className="px-4 py-3 page-body">
			<div className="row g-xl-4 g-lg-3 g-2 justify-content-between">
				<div className="col-xxl-9 col-xl-9 col-lg-9">
					<ul>
						<li>
							<div className="d-flex align-items-end ps-3">
								<span className="h1">[ v1.1 ]</span>
								<span className="ps-2 mb-2">--- 29 Dec 2023</span>
								<ul className="mt-3 lh-lg">
									<li>Add New Color Code</li>
									<li>Fixed Responsive Bug</li>
								</ul>
							</div>
							<div className="d-flex align-items-end ps-3">
								<span className="h1">[ v1.0 ]</span>
								<span className="ps-2 mb-2">--- 1 May 2023</span>
							</div>
							<ul className="mt-3 lh-lg">
								<li><b>Initial release of bvite!</b></li>
								<li>vite ^4.4.0</li>
								<li>bootstrap@5.3.0-alpha3</li>
								<li>react-bootstrap ^2.8.0</li>
								<li>@types/node ^16.16.0</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}

export default Changelog