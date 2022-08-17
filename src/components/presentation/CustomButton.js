function CustomButton(props) {
	return (
		<button
			type="button"
			className="btn btn-outline-success btn-login"
			onClick={props.click}
		>
			{props.placeholder}
		</button>
	);
}

export default CustomButton;
