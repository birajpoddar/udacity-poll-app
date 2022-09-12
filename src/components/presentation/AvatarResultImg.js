const AvatarResultImg = ({ user }) => (
	<img
		src={user.avatar}
		alt={user.name}
		className="navbar-brand"
		style={{
			borderRadius: '50%',
			height: '40px',
			border: '3px solid var(--bs-gray-600)',
			zIndex: 1,
			boxShadow: '0px 2px 2px 0px #000000aa',
			marginBottom: '-20px',
		}}
	/>
);

export default AvatarResultImg;
