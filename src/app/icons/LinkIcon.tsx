import React from 'react';
import clsx from 'clsx';
//"#0B3461"
const LinkIcon = ({className, color} : {className? : string, color : string}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			className={clsx('w-6 h-6 mt-auto mb-2 ml-auto mr-1 justify-end', className)}
		>
			<path
				stroke={color}
				strokeWidth="2"
				d="M21 4.293v16.659H4.373M20.962 21L1 1"
			></path>
		</svg>
	);
};

export default LinkIcon;