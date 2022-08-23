import { connect } from 'react-redux';
import { sortDateDecending } from '../utils/dataFormatter';
import Poll from './presentation/Poll';

const PollList = (props) => {
	return (
		<div className="card container mt-4 mb-4 p-0">
			<div className="card-header container">
				<h1 className="display-6">{props.title}</h1>
			</div>
			<div className="card-body">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Poll By</th>
							<th>Date Posted</th>
						</tr>
					</thead>
					<tbody>
						{props.polls.map((poll) => {
							return <Poll key={poll.id} id={poll.id}></Poll>;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default connect(({ polls }, { includePolls }) => {
	const copyPolls = JSON.parse(JSON.stringify(polls));
	includePolls.forEach((p) => {
		delete copyPolls[p];
	});

	// Convert to Array and sort by descending dates
	const pollArray = Object.values(copyPolls);
	pollArray.sort(sortDateDecending);

	return {
		polls: pollArray,
	};
})(PollList);
