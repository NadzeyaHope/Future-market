import React, { type ComponentProps, type FC } from 'react';

const Container: FC<ComponentProps<'div'>> = (props) => {
	const { className = '', ...rest } = props;
	return <div className={'mx-auto h-full max-w-7xl m-auto pr-4 pl-4 md:px-4 ' + className} {...rest} />;
};

export default Container;