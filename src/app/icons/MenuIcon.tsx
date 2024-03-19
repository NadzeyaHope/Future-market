import React from 'react';

const MenuIcon = ({className} : {className? : string}) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="41"
			height="41"
			fill="none"
			viewBox="0 0 41 41"
		>
			<circle cx="20.23" cy="20.23" r="19.73" stroke="#fff"></circle>
			<g fill="#fff" opacity="0.8">
				<path d="M11.594 13.061h17.812c.328 0 .594-.462.594-1.03 0-.57-.266-1.031-.594-1.031H11.594c-.328 0-.594.462-.594 1.03 0 .57.266 1.031.594 1.031zM29.406 19.061H11.594c-.328 0-.594.462-.594 1.03 0 .57.266 1.031.594 1.031h17.812c.328 0 .594-.462.594-1.03 0-.57-.266-1.031-.594-1.031zM29.406 27.122H11.594c-.328 0-.594.462-.594 1.03 0 .57.266 1.031.594 1.031h17.812c.328 0 .594-.462.594-1.03 0-.57-.266-1.03-.594-1.03z"></path>
			</g>
		</svg>
	);
};

export default MenuIcon;