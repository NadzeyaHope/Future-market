import React from 'react';
import CountGBP from '@/app/shared/CountGBP';
import { getCount, getGBP } from '@/api';


const CountContent = async () => {
	const response = await getGBP();
	const GBP = Math.floor(response.Valute.GBP.Value);
	const count = getCount();

	return (
		<div className={'flex space-x-40'}>
			<CountGBP
				count={`${count}+`}
			>техник для достижения целей</CountGBP>
			<CountGBP
				count={`${GBP}%`}
			>увеличение личной продуктивности</CountGBP>
		</div>
	);
};

export default CountContent;