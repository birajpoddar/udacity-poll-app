import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleNewPoll } from '../actions/polls';
import Container from './presentation/Container';

const NewPoll = (props) => {
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const navigate = useNavigate();

	const goHome = (e) => {
		e.preventDefault();

		navigate('/');
	};

	const handleReset = (e) => {
		e.preventDefault();

		setOption1('');
		setOption2('');
	};

	const handleChange = (e) => {
		e.preventDefault();

		const text = e.target.value;

		if (e.target.name === 'Option 1') {
			setOption1(text);
		}

		if (e.target.name === 'Option 2') {
			setOption2(text);
		}
	};

	const handleSave = (e) => {
		e.preventDefault();

		props.dispatch(
			handleNewPoll({
				optionOneText: option1,
				optionTwoText: option2,
				author: props.id,
			})
		);

		// Navigate Home
		navigate('/');
	};

	return (
		<Container title="Would You Rather...">
			<form onSubmit={handleSave}>
				<div className="container mb-5 mt-3">
					<div className="row justify-content-around">
						<div className="input-group w-45-perc">
							<span className="input-group-text font-weight-300">#1</span>
							<textarea
								className="form-control mh-250px mw-"
								aria-label="Option 1"
								name="Option 1"
								value={option1}
								onChange={handleChange}
							/>
						</div>
						<div className="m-3 fs-3 col align-self-center text-center hide-sm-under">
							OR
						</div>
						<div className="input-group w-45-perc">
							<span className="input-group-text font-weight-300">#2</span>
							<textarea
								className="form-control mh-250px"
								aria-label="Option 2"
								name="Option 2"
								value={option2}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className="d-flex mb-4 new-poll-buttons">
					<button
						type="submit"
						className="btn btn-success w-25"
						onClick={handleSave}
					>
						Save
					</button>

					<button
						type="button"
						className="btn btn-secondary w-25"
						onClick={handleReset}
					>
						Reset
					</button>

					<button
						type="button"
						className="btn btn-danger w-25"
						onClick={goHome}
					>
						Cancel
					</button>
				</div>
			</form>
		</Container>
	);
};

export default connect(({ authedUser }) => ({
	id: authedUser.id,
}))(NewPoll);
