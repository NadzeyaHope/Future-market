import React, { FormEventHandler, useEffect, useState } from 'react';
import MyInput from '@/app/shared/InputMy';
import CheckboxForm from '@/app/shared/CheckboxForm';
import clsx from 'clsx';
import LinkIcon from '@/app/icons/LinkIcon';
import { Button } from '@nextui-org/button';
import SussesModalContent from '@/app/shared/SussesModalContent';


const ContentForm = () => {
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [check, setCheck] = useState(false);
	const [isInvalidName, setIsInvalidName] = useState(false);
	const [isInvalidPhone, setIsInvalidPhone] = useState(false);
	const [isInvalidCheck, setIsInvalidCheck] = useState(false);
	const [susses, setSusses] = useState(false);

	useEffect(() => {
		const name = localStorage.getItem('name') === null ? '' : localStorage.getItem('name');
		const phone = localStorage.getItem('phone') === null ? '' : localStorage.getItem('phone');
		setName(String(name));
		setPhone(String(phone));
	}, []);


	const onChangeName = (e: any) => {
		setIsInvalidName(false);
		setName(e.target.value);
	};
	const onChangePhone = (e: any) => {
		setPhone(e.target.value);
		setIsInvalidPhone(false);
	};
	const onChangeCheck = () => {
		setCheck(!check);
		setIsInvalidCheck(false);
	};
	const onSubmit: FormEventHandler = (event) => {
		event.preventDefault();
		if (name === '') {
			setIsInvalidName(true);
			return;
		}
		if (phone === '') {
			setIsInvalidPhone(true);
			return;
		}
		if (check) {
			setIsInvalidCheck(true);
			return;
		}
		localStorage.setItem('name', name);
		localStorage.setItem('phone', phone);
		setSusses(true);
	};
	return (
		<div className={'px-8'}>
			<div className={'mt-[96px]'}/>
			{!susses ?
				<form onSubmit={onSubmit} className={'max-w-lg m-auto space-y-[55px] md:space-y-[66px]'}>
					<p className={'text-xl font-semibold md:text-4xl'}>Закажите обратный звонок</p>
					<MyInput
						isInvalid={isInvalidName}
						value={name}
						onChange={(e) => onChangeName(e)}
						label={'ИМЯ'}
					/>
					<MyInput
						isInvalid={isInvalidPhone}
						value={phone}
						onChange={(e) => {
							onChangePhone(e);
						}}
						label={'ТЕЛЕФОН'}
					/>
					<CheckboxForm
						onChange={onChangeCheck}
						value={check}
						isInvalid={isInvalidCheck}
					>
						Согласен на сохранение и обработку персональных данных
					</CheckboxForm>
						<Button
							type={'submit'}
							size={'lg'}
							className={clsx('rounded-none px-3 md:p-0 border-l-0 md:w-[380px] h-[71px] text-lg font-semibold bg-opacity-20 bg-[#133457] text-white border-2 border-white')}
						>
							<div className={'m-auto'}>
								Заказать обратный звонок
							</div>
							<div className={clsx('h-full w-0.5', `bg-[#FFFFFF]`)}/>
							<LinkIcon color={'#FFFFFF'} className={'w-full ml-5'}/>
						</Button>
				</form>
				:
				<SussesModalContent/>
			}
		</div>
	);
};

export default ContentForm;