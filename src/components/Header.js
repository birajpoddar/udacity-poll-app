import { logoutUser } from '../actions/authedUser';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
	const logout = (e) => {
		e.preventDefault();

		props.dispatch(logoutUser());
	};

	return (
		<nav className="navbar sticky-top bg-light text-uppercase">
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
								boxShadow: '1px 0px 2px 0px #000000aa',
							}}
						/>
						<div
							className="badge bg-danger opacity-30 nav-link"
							style={{
								marginLeft: '-60px',
								paddingLeft: '30px',
								verticalAlign: 'middle',
							}}
							href="#"
						>
							<a
								onClick={logout}
								className="nav-link"
								href="#"
								style={{ zIndex: 2, paddingTop: '10px' }}
							>
								Logout
							</a>
						</div>
						<Link to="/" className="navbar-brand">
							Home
						</Link>
					</ul>
				</div>
				<div className="d-flex">
					<ul className="navbar-nav">
						<li className="navbar-item">
							<Link className="nav-link" to="/new">
								New Poll
							</Link>
						</li>
						<li style={{ fontSize: 'x-large', color: 'dimgrey', zIndex: -1 }}>
							◉
						</li>
						<li className="navbar-item">
							<Link className="nav-link" to="/leaderboard">
								Leaderboard
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default connect(({ authedUser }) => ({
	avatar: authedUser.avatarURL,
	name: authedUser.name,
}))(Header);
