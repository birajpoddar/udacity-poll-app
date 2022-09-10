import { connect } from 'react-redux';
import { sortDateDecending } from '../utils/dataFormatter';
import Container from './presentation/Container';
import Poll from './presentation/Poll';

const PollList = (props) => {
	if (props.polls.length === 0)
		return (
			<Container title={props.title}>
				<p className="text-center m-3 font-weight-400 text-uppercase">
					No Poll(s) needs your attention
				</p>
			</Container>
		);

	return (
		<Container title={props.title}>
			<table className="table table-striped m-0 font-weight-400">
				<thead>
					<tr className="text-uppercase">
						<th className="font-weight-500">Poll By</th>
						<th className="font-weight-500 text-end">Date Posted</th>
					</tr>
				</thead>
				<tbody>
					{props.polls.map((poll) => {
						return <Poll key={poll.id} id={poll.id}></Poll>;
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default connect(({ polls }, { excludedPolls }) => {
	// Remove excluded polls
	const copyPolls = JSON.parse(JSON.stringify(polls));
	excludedPolls.forEach((p) => {
		delete copyPolls[p];
	});

	// Convert to Array and sort by descending dates
	const pollArray = Object.values(copyPolls);
	pollArray.sort(sortDateDecending);

	return {
		polls: pollArray,
	};
})(PollList);
