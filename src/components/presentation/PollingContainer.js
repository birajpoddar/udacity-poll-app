import { connect } from 'react-redux';

const PollingContainer = (props) => {
	return (
		<div className="card container mt-4 mb-4 p-0">
			<div className="card-header d-flex justify-content-between">
				<div className="d-flex">
					<h1 className="display-6 m-0 container-header">
						Would You Rather...
					</h1>
				</div>
				<div className="d-flex" style={{ gap: '10px' }}>
					<div
						className="d-flex"
						style={{
							flexDirection: 'column',
							alignItems: 'flex-end',
							justifyContent: 'center',
						}}
					>
						<p
							className="text-uppercase m-0"
							style={{ fontSize: '.6rem', color: 'var(--bs-gray-600)' }}
						>
							Poll By
						</p>
						<p
							className="display-6 m-0"
							style={{
								fontSize: '1.1rem',
								textTransform: 'uppercase',
								color: 'var(--bs-gray-800)',
							}}
						>
							{props.name}
						</p>
					</div>
					<div className="d-flex align-items-center">
						<img
							src={props.avatar}
							alt={props.name}
							className="navbar-brand"
							style={{
								borderRadius: '50%',
								maxHeight: '35px',
								maxWidth: '35px',
								border: '3px solid var(--bs-gray-800)',
								zIndex: 1,
								boxShadow: '1px 0px 2px 0px #000000aa',
							}}
						/>
					</div>
				</div>
			</div>
			<div className="card-body">{props.children}</div>
		</div>
	);
};

export default connect(({ users, polls }, { id }) => {
	const user = polls[id].author;
	const userDetails = users[user];

	return {
		name: userDetails.name,
		avatar: userDetails.avatarURL,
	};
})(PollingContainer);
