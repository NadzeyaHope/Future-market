import React from 'react';
import {Input} from "@nextui-org/react";

interface Props {
	label: string;
	onChange: (e : any)=>void;
	value : string;
	isInvalid : boolean;
}

const InputMy = (props : Props) =>  {
	const { label, value, onChange, isInvalid } = props;

	return (
				<div className={'w-full'} key={'flat'}>
					<Input
						isInvalid={isInvalid}
						value={value}
						type="text"
						onChange={(e)=>{onChange(e)}}
						variant={'flat'}
						label={label}
						classNames={{
							base : ['bg-none border-b-1 opacity-60'],
							label : ['text-white mb-[-20px] md:mb-0  ml-[-10px] font-normal text-sm md:text-xl'],
							input : ['text-white mb-[-5px] md:mb-0 font-normal text-sm md:text-xl'],
						}}
					/>
				</div>
	);
}

export default InputMy;