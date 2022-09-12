import { connect } from 'react-redux';
import Container from './presentation/Container';
import LeaderStat from './presentation/LeaderStat';

const Leaderboard = (props) => {
	if (props.leaderboard.length === 0)
		return (
			<Container title="Leaderboard">
				<p className="text-center m-3 font-weight-400 text-uppercase">
					None of the User(s) attained true Moksha!
				</p>
			</Container>
		);

	return (
		<Container title="Leaderboard">
			<table className="table table-striped m-0 font-weight-400 mb-1">
				<thead>
					<tr className="text-uppercase font-weight-500">
						<th className="font-weight-500">User Name</th>
						<th className="font-weight-500 text-center">Answered</th>
						<th className="font-weight-500 text-end">Created</th>
					</tr>
				</thead>
				<tbody>
					{props.leaderboard.map((stat) => {
						return <LeaderStat key={stat.id} stat={stat} />;
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default connect(({ users }) => {
	const userData = Object.values(users);

	const leaderArr = userData.map((m) => {
		return {
			id: m.id,
			name: m.name,
			answered: Object.keys(m.answers).length,
			created: m.questions.length,
		};
	});

	// Sorting the arr in desc order
	leaderArr.sort((a, b) => b.answered + b.created - (a.answered + a.created));

	return {
		leaderboard: leaderArr,
	};
})(Leaderboard);
