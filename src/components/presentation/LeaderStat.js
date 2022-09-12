const LeaderStat = ({ stat }) => {
	return (
		<tr id={stat.id}>
			<td className="text-start">{stat.name}</td>
			<td className="text-center">{stat.answered}</td>
			<td className="text-end">{stat.created}</td>
		</tr>
	);
};

export default LeaderStat;
