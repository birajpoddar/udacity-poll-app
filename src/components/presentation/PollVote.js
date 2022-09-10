import { createRef } from 'react';
import { connect } from 'react-redux';
import { handlePollAnswer } from '../../actions/polls';

const PollVote = (props) => {
	const optionOne = createRef();
	const optionTwo = createRef();

	const disablePoll = () => {
		optionOne.current.disabled = true;
		optionTwo.current.disabled = true;
	};

	const handleSave = (e) => {
		e.preventDefault();

		// Disable both buttons
		disablePoll();

		// Getting the option selected
		const answer = {
			authedUser: props.voter,
			qid: props.id,
			answer: e.target.name,
		};

		props.dispatch(handlePollAnswer(answer));
	};

	return (
		<div className="row justify-content-between m-3 text-uppercase">
			<button
				className="form-control mh-250px w-45-perc p-3 poll-option"
				style={{ backgroundColor: 'aliceblue' }}
				ref={optionOne}
				name="optionOne"
				onClick={handleSave}
			>
				{props.optionOne.endsWith('?')
					? props.optionOne
					: props.optionOne + ' ?'}
			</button>
			<div className="m-3 fs-3 col align-self-center text-center hide-sm-under">
				OR
			</div>
			<button
				className="form-control mh-250px w-45-perc p-3 poll-option"
				style={{ backgroundColor: 'beige' }}
				ref={optionTwo}
				name="optionTwo"
				onClick={handleSave}
			>
				{props.optionTwo.endsWith('?')
					? props.optionTwo
					: props.optionTwo + ' ?'}
			</button>
		</div>
	);
};

export default connect(({ polls, authedUser }, { id }) => {
	return {
		voter: authedUser.id,
		optionOne: polls[id].optionOne.text,
		optionTwo: polls[id].optionTwo.text,
	};
})(PollVote);
