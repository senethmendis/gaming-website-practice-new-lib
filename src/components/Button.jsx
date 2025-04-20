import React from "react";

const Button = ({ title, containerClass, id, lefIcon, rightIcon, onClick }) => {
	return (
		<button
			onClick={onClick}
			id={id}
			className={`group relative z-10 w-fill cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7
            py-3 text-black 
            ${containerClass}`}>
			{lefIcon}

			<span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
				<div>{title}</div>
			</span>
			{rightIcon}
		</button>
	);
};

export default Button;
