import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigate = (props) => {
	const navigate = useNavigate();

	React.useEffect(() => {
		navigate(props.to);
	});
};

export default Navigate;
