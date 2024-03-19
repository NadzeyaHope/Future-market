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
						className={''}
						variant={'flat'}
						label={label}
						classNames={{
							base : ['bg-none border-b-1 opacity-60'],
							label : ['text-white ml-[-10px] font-normal text-xl'],
							input : ['text-white font-normal text-xl'],
						}}
					/>
				</div>
	);
}

export default InputMy;