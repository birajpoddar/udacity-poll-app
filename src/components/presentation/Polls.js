export const Polls = (props) => {
	return (
		<tr id={props.id}>
			<td>{props.user}</td>
			<td>{props.date}</td>
		</tr>
	);
};
