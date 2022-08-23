import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';
import PollList from './PollList';
import Header from './Header';

const Dashboard = (props) => {
	return (
		<div>
			<PollList title="Unanswered Polls" includePolls={props.undone} />
			<PollList title="Answered Polls" includePolls={props.done} />
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
