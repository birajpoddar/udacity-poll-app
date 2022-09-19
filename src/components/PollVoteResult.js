import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PollingContainer from './presentation/PollingContainer';
import PollVote from './PollVote';
import PollResult from './PollResult';
import PageNotFound from './presentation/PageNotFound';

const PollVoteResult = (props) => {
	if (props.id === null) {
		return <PageNotFound />;
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

	if (poll === undefined) {
		return {
			id: null,
		};
	}

	const vote = authedUser.answers[id];

	return {
		id,
		vote,
		optionOne: poll.optionOne,
		optionTwo: poll.optionTwo,
	};
})(PollVoteResult);
