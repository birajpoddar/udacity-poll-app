import { Link } from 'react-router-dom';

const PageNotFound = (props) => {
	return (
		<div id="loginPanel">
			<div className="card text-bg text-center" style={{ minWidth: '20rem' }}>
				<div className="card-header">
					<h1 className="display-6 text-uppercase">⚠️ Error 404</h1>
				</div>
				<div className="card-body">
					<div>
						<p>Page Not Found</p>
						<Link to="/" className="btn btn-success">
							← Go Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
