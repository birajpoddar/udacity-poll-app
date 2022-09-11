const LoginContainer = (props) => {
	return (
		<div id="loginPanel">
			<div className="card text-bg" style={{ minWidth: '20rem' }}>
				<div className="card-header text-center">
					<h1 className="display-6 text-uppercase font-weight-100">
						{props.title}
					</h1>
				</div>
				<div className="card-body">{props.children}</div>
			</div>
		</div>
	);
};

export default LoginContainer;
