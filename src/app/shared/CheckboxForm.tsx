import React from 'react';
import { Checkbox } from '@nextui-org/react';
import Check from '@/app/icons/Check';

interface Props {
	children : string,
	onChange : ()=>void,
	value : boolean;
	isInvalid: boolean;
}
const CheckboxForm = (props : Props) => {
	const {children, onChange, value, isInvalid} = props;
	return (
		<Checkbox
			radius={'none'}
			color={'default'}
			icon={<Check/>}
			isInvalid={false}
			isSelected={value}
			onClick={onChange}
			className={'text-white opacity-60'}
			classNames={{
				base: ['rounded-none gap-[23px]'],
				label: ['text-white text-sm font-normal'],
				wrapper: ['w-[30px] h-[30px] border-1 border-white'],
			}}
		>
			{children}
		</Checkbox>
	);
};

export default CheckboxForm;