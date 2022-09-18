import { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
	return (
		<div className="input-group mb-3">
			<span className="input-group-text">{props.title ?? '@'}</span>
			<div className="form-floating">
				<input
					type={props.type ?? 'text'}
					className="form-control"
					id={props.id}
					ref={ref}
					placeholder={props.placeholder}
					data-testid={props.id}
				/>
				<label htmlFor={props.id}>{props.placeholder}</label>
			</div>
		</div>
	);
});

export default CustomInput;
