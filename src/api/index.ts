const withLeadingZero = (n: number): string => {
	return (`0${n}`).slice(-2);
};
export const getCount = () => {
	const now = new Date();
	const date = `${withLeadingZero(now.getDate())}${withLeadingZero(now.getMonth() + 1)}${now.getFullYear()}`
	const numbers = date.split('').map(el => Number(el))
	return numbers.reduce((acc, number) => acc + number, 0);
}


export const getGBP = async () => {
	let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response.json();
};