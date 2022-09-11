import LoginContainer from './LoginContainer';

const Loading = (props) => {
	return (
		<LoginContainer title="Loading...">
			<div className="d-flex align-items-center justify-content-center">
				<div className="spinner-border m-2"></div>
			</div>
		</LoginContainer>
	);
};

export default Loading;
