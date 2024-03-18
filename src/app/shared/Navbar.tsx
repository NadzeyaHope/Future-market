import React from 'react';

const Navbar = () => {
	return (
		<nav className={'flex m-auto text-sm text-white space-x-2 font-normal'}>
			<div>Обо мне</div>
			<div>Наставничество</div>
			<div>Мероприятия</div>
			<div>Кейсы</div>
			<div>Отзывы</div>
			<div>Контакты</div>
		</nav>
	);
};

export default Navbar;