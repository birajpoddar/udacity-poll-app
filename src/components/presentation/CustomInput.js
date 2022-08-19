const CustomInput = (props) => {
	return (
		<div className="input-group mb-3">
			<span className="input-group-text">{props.title ?? '@'}</span>
			<div className="form-floating">
				<input
					type={props.type ?? 'text'}
					className="form-control"
					id={props.id}
					placeholder={props.placeholder}
				/>
				<label htmlFor={props.id}>{props.placeholder}</label>
			</div>
		</div>
	);
};

export default CustomInput;
