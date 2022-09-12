import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Poll = (props) => {
	return (
		<tr id={props.id}>
			<td>
				<Link to={'/questions/' + props.id} className="nav-link text-underline">
					{props.author}
				</Link>
			</td>
			<td className="text-end">{props.date}</td>
		</tr>
	);
};

export default connect(({ polls, users }, { id }) => {
	const poll = polls[id];
	const author = users[poll.author].name;
	const date = new Date(poll.timestamp).toLocaleDateString();

	return {
		author,
		date,
	};
})(Poll);
