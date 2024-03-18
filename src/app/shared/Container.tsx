import React, { type ComponentProps, type FC } from 'react';

const Container: FC<ComponentProps<'div'>> = (props) => {
	const { className = '', ...rest } = props;
	return <div className={'mx-auto max-w-[1320px] m-auto px-4 md:px-4 ' + className} {...rest} />;
};

export default Container;