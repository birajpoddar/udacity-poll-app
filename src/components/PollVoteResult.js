import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PollingContainer from './presentation/PollingContainer';
import PollVote from './PollVote';
import PollResult from './PollResult';
import Navigate from './presentation/Navigate';

const PollVoteResult = (props) => {
	if (!props.id) {
		return <Navigate to="/404" />;
	}

	return (
		<PollingContainer id={props.id}>
			{props.vote === undefined ? (
				<PollVote id={props.id} />
			) : (
				<PollResult id={props.id} />
			)}
		</PollingContainer>
	);
};

export default connect(({ polls, authedUser }, props) => {
	const { id } = useParams();
	const poll = polls[id];

	if (!poll) {
		return {};
	}

	const vote = authedUser.answers[id];

	return {
		id,
		vote,
		optionOne: poll.optionOne,
		optionTwo: poll.optionTwo,
	};
})(PollVoteResult);
