const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em'); // 비구조 할당
const data = [
	{cond : hr >= 5 && hr < 11, name: 'morning'},
	{cond : hr >= 11 && hr < 16, name: 'afternoon'},
	{cond : hr >= 16 && hr < 19, name: 'evening'},
	{cond : hr >= 19 || hr < 5, name: 'night'},
]


setInterval(() => {
	changeTheme();
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

function changeTheme () {
	const hr = new Date().getHours(); // 메서드 체이닝 - 객체가 프로미스를 반환할 때.

	data.forEach(item => {
		if(item.cond) {
			main.className = '';
			main.classList.add(item.name);
		}
	})

	// if (hr >= 5 && hr < 11) {
	// 	classTime('morning');
	// }
	// if (hr >= 11 && hr < 16) {
	// 	classTime('afternoon');
	// }
	// if (hr >= 16 && hr < 19) {
	// 	classTime('evening');
	// }
	// if (hr >= 19 || hr < 5) {
	// 	classTime('night');
	// }
}

//표현식 : expression
// statement : 

function classTime(className) {
	main.className = '';
	main.classList.add(className);
}

function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr > 12) {
		am.classList.remove('on');
		pm.classList.add('on');
	} else {
		am.classList.add('on');
		pm.classList.remove('on');
	}
	return [hr, min, sec];
}

function setTime(num, index) {
	if (num < 10) num = '0' + num;
	else num = num;
	numbers[index].innerText = num;
}
