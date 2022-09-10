import { connect } from 'react-redux';

const PollResult = (props) => {
	return <div>Result Page</div>;
};

export default connect(({ polls, authedUser }, { id }) => {
	const poll = polls[id];
	const vote = authedUser.answers[id];

	console.group(id);
	console.log(vote);
	console.groupEnd();

	return {
		vote,
		optionOne: poll.optionOne,
		optionTwo: poll.optionTwo,
	};
})(PollResult);
