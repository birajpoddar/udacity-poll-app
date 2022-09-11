import { connect } from 'react-redux';

const PollResult = (props) => {
	const optionOneResult = `Votes: ${props.optionOne.votes}, Percentage: ${props.optionOne.percentage}%`;
	const optionTwoResult = `Votes: ${props.optionTwo.votes}, Percentage: ${props.optionTwo.percentage}%`;

	return (
		<div>
			<div
				className="d-flex justify-content-around align-items-end mt-3"
				style={{ gap: '50px' }}
			>
				<div
					name="optionOne"
					className="p-3 pb-0 text-center text-uppercase w-45-perc"
				>
					<div>
						{props.optionOne.voted ? (
							<img
								src={props.user.avatar}
								alt={props.user.name}
								className="navbar-brand"
								style={{
									borderRadius: '50%',
									height: '40px',
									border: '3px solid var(--bs-gray-600)',
									zIndex: 1,
									boxShadow: '1px 0px 2px 0px #000000aa',
									marginBottom: '-20px',
								}}
							/>
						) : null}
					</div>
					<div
						className="d-flex align-items-center justify-content-center"
						style={{
							minHeight: 30 + props.optionOne.percentage + 'px',
							background: 'var(--bs-orange)',
							color: 'var(--bs-dark)',
						}}
					>
						<h6 className="m-0 font-weight-600">
							{props.optionOne.percentage + '%'}
						</h6>
					</div>
				</div>
				<div
					name="optionTwo"
					className="p-3 pb-0 text-center text-uppercase w-45-perc"
				>
					<div>
						{props.optionTwo.voted ? (
							<img
								src={props.user.avatar}
								alt={props.user.name}
								className="navbar-brand"
								style={{
									borderRadius: '50%',
									height: '40px',
									border: '3px solid var(--bs-gray-600)',
									zIndex: 1,
									boxShadow: '1px 0px 2px 0px #000000aa',
									marginBottom: '-20px',
								}}
							/>
						) : null}
					</div>
					<div
						className="d-flex align-items-center justify-content-center"
						style={{
							minHeight: 30 + props.optionTwo.percentage + 'px',
							background: 'var(--bs-teal)',
							color: 'var(--bs-dark)',
						}}
					>
						<h6 className="m-0 font-weight-600">
							{props.optionTwo.percentage + '%'}
						</h6>
					</div>
				</div>
			</div>
			<div
				className="d-flex justify-content-around align-items-top mb-3"
				style={{ gap: '50px' }}
			>
				<div
					name="optionOne"
					className="p-3 pt-0 text-center text-uppercase w-45-perc"
				>
					<div className="p-2" style={{ border: '1px solid var(--bs-orange)' }}>
						<p>{optionOneResult}</p>
						<hr />
						<h6>{props.optionOne.title}</h6>
					</div>
				</div>
				<div
					name="optionTwo"
					className="p-3 pt-0 text-center text-uppercase w-45-perc"
				>
					<div className="p-2" style={{ border: '1px solid var(--bs-teal)' }}>
						<p>{optionTwoResult}</p>
						<hr />
						<h6>{props.optionTwo.title}</h6>
					</div>
				</div>
			</div>
			<div
				className="d-flex justify-content-around align-items-center mb-3 p-3 text-uppercase"
				style={{ gap: '50px', color: 'var(--bs-gray-600)' }}
			>
				<h6 className="mb-0">Total Votes: {props.stats.votes}</h6>
				<h6 className="mb-0">
					Your Vote: {props.stats.voted === 'optionOne' ? '#1' : '#2'}
				</h6>
			</div>
		</div>
	);
};

export default connect(({ users, polls, authedUser }, { id }) => {
	const poll = polls[id];
	const vote = authedUser.answers[id];

	const optionOne = {
		votes: poll.optionOne.votes.length,
		title: poll.optionOne.text,
		voted: vote === 'optionOne' ? true : false,
	};

	const optionTwo = {
		votes: poll.optionTwo.votes.length,
		title: poll.optionTwo.text,
		voted: vote === 'optionTwo' ? true : false,
	};

	// Calculating percentage
	const totalVotes = optionOne.votes + optionTwo.votes;
	optionOne.percentage = Math.round((optionOne.votes / totalVotes) * 100);
	optionTwo.percentage = Math.round((optionTwo.votes / totalVotes) * 100);

	// User Details
	const user = {
		name: users[authedUser.id].name,
		avatar: users[authedUser.id].avatarURL,
	};

	return {
		optionOne,
		optionTwo,
		user,
		stats: {
			votes: totalVotes,
			voted: vote,
		},
	};
})(PollResult);
