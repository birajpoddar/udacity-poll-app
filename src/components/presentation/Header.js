import { logoutUser } from '../../actions/authedUser';

const Header = (props) => {
	return (
		<nav className="navbar sticky-top bg-light">
			<div className="container">
				<div className="d-flex">
					<ul className="navbar-nav">
						<img
							src={props.avatar}
							alt={props.name}
							className="navbar-brand"
							style={{
								borderRadius: '50%',
								height: '40px',
								border: '3px solid teal',
								zIndex: 1,
							}}
						/>
						<div
							className="badge bg-danger opacity-40 nav-link"
							style={{
								marginLeft: '-60px',
								paddingLeft: '30px',
								verticalAlign: 'middle',
							}}
							href="#"
						>
							<a
								className="nav-link"
								href="#"
								onClick={props.logout}
								style={{ zIndex: 2, paddingTop: '10px' }}
							>
								Logout
							</a>
						</div>
						<a className="navbar-brand" href="#">
							Home
						</a>
					</ul>
				</div>
				<div className="d-flex">
					<ul className="navbar-nav">
						<li className="navbar-item">
							<a className="nav-link" href="#">
								New Poll
							</a>
						</li>
						<li style={{ fontSize: 'x-large' }}>◉</li>
						<li className="navbar-item">
							<a className="nav-link" href="#">
								Leaderboard
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
