const Container = (props) => {
	return (
		<div className="card container mt-4 mb-4 p-0">
			<div className="card-header d-flex justify-content-between">
				<div className="d-flex">
					<h1 className="display-6 m-0 container-header">{props.title}</h1>
				</div>
			</div>
			<div className="card-body">{props.children}</div>
		</div>
	);
};

export default Container;
