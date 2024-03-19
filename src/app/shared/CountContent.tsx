import React from 'react';
import CountOfGoal from '@/app/shared/CountOfGoal';

const CountContent = () => {
	return (
		<div className={'flex space-x-40'}>
			<CountOfGoal
				count={'130+'}
			>техник для достижения целей</CountOfGoal>
			<CountOfGoal
				count={'250%'}
			>увеличение личной продуктивности</CountOfGoal>
		</div>
	);
};

export default CountContent;