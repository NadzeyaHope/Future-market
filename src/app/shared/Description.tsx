import React from 'react';

const Description = ({children} : {children : string}) => {
	return (
		<div className={'text-white font-normal text-lg opacity-50'} >
			{children}
		</div>
	);
};

export default Description;