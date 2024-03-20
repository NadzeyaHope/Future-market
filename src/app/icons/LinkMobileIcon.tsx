import React from 'react';
import clsx from 'clsx';

const LinkMobileIcon = ({className, color} : {className? : string, color : string}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="11"
			height="11"
			fill="none"
			viewBox="0 0 11 11"
			className={clsx('w-3 h-3 mt-auto mb-1 mr-1', className)}
		>
			<path
				stroke={color}
				strokeWidth="2"
				d="M9.558 2.564v6.974h-6.96m6.944.02L1.186 1.186"
			></path>
		</svg>
	);
};

export default LinkMobileIcon;