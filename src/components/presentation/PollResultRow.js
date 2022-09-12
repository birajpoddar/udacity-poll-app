import { forwardRef } from 'react';

const PollResultRow = forwardRef((props, ref) => {
	return (
		<div
			className="d-flex justify-content-around align-items-end mt-3"
			style={{ gap: '50px', ...props.style }}
			ref={ref}
		>
			{props.children}
		</div>
	);
});

export default PollResultRow;
