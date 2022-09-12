import { connect } from 'react-redux';
import AvatarResultImg from './presentation/AvatarResultImg';
import PollResultRow from './presentation/PollResultRow';

const PollResult = (props) => {
	const optionOneResult = `Votes: ${props.optionOne.votes}, Percentage: ${props.optionOne.percentage}%`;
	const optionTwoResult = `Votes: ${props.optionTwo.votes}, Percentage: ${props.optionTwo.percentage}%`;

	return (
		<div>
			<PollResultRow>
				<h2 name="optionOne">#1</h2>
				<h2 name="optionTwo">#2</h2>
			</PollResultRow>
			<PollResultRow style={{ minHeight: '170px' }}>
				<div
					name="optionOne"
					className="p-3 pb-0 text-center text-uppercase w-45-perc"
				>
					<div>
						{props.optionOne.voted ? (
							<AvatarResultImg user={props.user} />
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
							<AvatarResultImg user={props.user} />
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
			</PollResultRow>
			<PollResultRow
				ref={(el) => {
					if (el) {
						el.classList.remove('mt-3');
						el.classList.remove('align-items-end');
					}
				}}
			>
				<div
					name="optionOne"
					className="p-3 pt-0 text-center text-uppercase w-45-perc"
					style={{ display: 'flex' }}
				>
					<div
						className="p-2"
						style={{ border: '1px solid var(--bs-orange)', flex: 1 }}
					>
						<p>{optionOneResult}</p>
						<hr />
						<h6>{props.optionOne.title}</h6>
					</div>
				</div>
				<div
					name="optionTwo"
					className="p-3 pt-0 text-center text-uppercase w-45-perc"
					style={{ display: 'flex' }}
				>
					<div
						className="p-2"
						style={{ border: '1px solid var(--bs-teal)', flex: 1 }}
					>
						<p>{optionTwoResult}</p>
						<hr />
						<h6>{props.optionTwo.title}</h6>
					</div>
				</div>
			</PollResultRow>
			<hr />
			<PollResultRow>
				<h6 className="mb-0">Total Votes: {props.stats.votes}</h6>
				<h6 className="mb-0">
					My Vote: {props.stats.voted === 'optionOne' ? '#1' : '#2'}
				</h6>
			</PollResultRow>
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
