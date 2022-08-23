import { connect } from 'react-redux';
import PollList from './PollList';

const Dashboard = (props) => {
	return (
		<div>
			<PollList title="Unanswered Polls" excludedPolls={props.done} />
			<PollList title="Answered Polls" excludedPolls={props.undone} />
		</div>
	);
};

export default connect(({ authedUser, polls }) => {
	const done = Object.keys(authedUser.answers);
	const all = Object.keys(polls);
	const undone = all.filter((x) => !done.includes(x));

	return {
		done,
		undone,
	};
})(Dashboard);
