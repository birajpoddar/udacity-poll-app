export const Loading = (props) => {
	return (
		<div id="loginPanel">
			<div className="card text-bg" style={{ minWidth: '20rem' }}>
				<div className="card-header">
					<h1 className="display-6 text-uppercase">Employee Poll Login</h1>
				</div>
				<div className="card-body">
					<div className="d-flex align-items-center">
						<p>Loading...</p>
						<div
							className="spinner-border ms-auto"
							role="status"
							aria-hidden="true"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};
