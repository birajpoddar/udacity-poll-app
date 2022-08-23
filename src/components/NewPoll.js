import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { savePoll } from '../actions/polls';

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

	const handleChange1 = (e) => {
		e.preventDefault();

		const text = e.target.value;

		setOption1(text);
	};

	const handleChange2 = (e) => {
		e.preventDefault();

		const text = e.target.value;

		setOption2(text);
	};

	const handleSave = (e) => {
		e.preventDefault();

		props.dispatch(
			savePoll({
				optionOneText: option1,
				optionTwoText: option2,
				author: props.id,
			})
		);

		// Navigate Home
		navigate('/');
	};

	return (
		<div className="card container mt-4 mb-4 p-0">
			<div className="card-header">
				<h1 className="display-6">Would You Rather...</h1>
			</div>
			<div className="card-body mt-3">
				<form onSubmit={handleSave}>
					<div className="input-group">
						<span className="input-group-text">#1</span>
						<textarea
							className="form-control mh-150px"
							aria-label="Option 1"
							value={option1}
							onChange={handleChange1}
						></textarea>
					</div>
					<center className="m-3 fs-4">OR</center>
					<div className="input-group">
						<span className="input-group-text">#2</span>
						<textarea
							className="form-control mh-150px"
							aria-label="Option 2"
							value={option2}
							onChange={handleChange2}
						></textarea>
					</div>

					<div className="d-flex justify-content-between mt-4">
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
			</div>
		</div>
	);
};

export default connect(({ authedUser }) => ({
	id: authedUser.id,
}))(NewPoll);
