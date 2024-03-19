import React from 'react';
import clsx from 'clsx';

const Description = ({children, className} : {children : string, className? : string}) => {
	return (
		<div className={clsx('text-white font-normal text-lg opacity-50', className)} >
			{children}
		</div>
	);
};

export default Description;