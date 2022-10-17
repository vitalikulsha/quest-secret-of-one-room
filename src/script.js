const state = [
	{
		id: 1,
		name: 'stage1-01',
		answer: '1',
		hints: [
			'Этап1, Текст подсказки №1',
			'Этап1, Текст подсказки №2',
			'Этап1, Текст подсказки №3'
		]
	},
	{
		id: 2,
		name: 'stage1-02',
		answer: '2',
		hints: [
			'Этап2, Текст подсказки №1',
			'Этап2, Текст подсказки №2',
			'Этап2, Текст подсказки №3',
			'Этап2, Текст подсказки №4'
		]
	},
	{
		id: 3,
		name: 'stage1-03',
		answer: '3',
		hints: [
			'Этап3, Текст подсказки №1',
			'Этап3, Текст подсказки №2'
		]
	},
	{
		id: 4,
		name: 'stage1-04',
		answer: '4',
		hints: [
			'Этап4, Текст подсказки №1',
			'Этап4, Текст подсказки №2',
			'Этап4, Текст подсказки №3'
		]
	}
];

const stages = document.querySelectorAll('#room-1 .stage');
const alert = document.querySelector('.disp-msg');
const overlay = document.querySelector('.overlay');
const HELP_TITLE = '<span class="help__title">Подсказка: </span>';
const TIME_OUT = 5000;

//инициализация параметров
function init() {
	localStorage.stateNum = localStorage.stateNum || 1;
	localStorage.hintNum = localStorage.hintNum || 0;
}
init();

//обновляет этап согласно состоянию квеста
function updateStages() {
	for (let i = localStorage.stateNum; i < stages.length; i++) {
		stages[i].classList.add('hidden');
	}

	for (let i = 0; i < localStorage.stateNum - 1; i++) {
		/*for(let j = 0; j < state[i].hints.length; j++){
			let hint = createHint(i , j);
			addHint(stages[i], hint);
		}*/
		stages[i].querySelector('.btn_help').disabled = true;
		stages[i].querySelector('.btn_answer').disabled = true;
		stages[i].querySelector('.answer__input').disabled = true;
		stages[i].querySelector('.answer__input').value = state[i].answer;
	}

	for (let i = 0; i < localStorage.hintNum; i++) {
		let hint = createHint(localStorage.stateNum - 1, i);
		addHint(stages[localStorage.stateNum - 1], hint);
	}
}
updateStages();

//создает подсказку в теге li
function createHint(stateNum, hintNum) {
	let hint = document.createElement('li');
	hint.classList.add('help__text');
	hint.innerHTML = HELP_TITLE + state[stateNum].hints[hintNum];
	return hint;
}

//добавляет подсказку к списку подсказок
function addHint(stage, hint) {
	const hintList = stage.querySelector('.help');
	hintList.append(hint);
}

//обновляет счетчик подсказок
function updateHintNum(stage) {
	const maxHintNum = state[localStorage.stateNum - 1].hints.length - 1;
	stage.querySelector('.btn_help').disabled = true;
	if (localStorage.hintNum < maxHintNum) {
		localStorage.hintNum++;
		setTimeout(() => stage.querySelector('.btn_help').disabled = false, TIME_OUT);
	}
}

//событие - добавление подсказки
for (let stage of stages) {
	stage.querySelector('.btn_help').addEventListener('click', function () {
		let hint = createHint(localStorage.stateNum - 1, localStorage.hintNum);
		addHint(stage, hint);
		updateHintNum(stage);
	});
}

//проверяте ответ
function checkAnswer(stage) {
	const answer = stage.querySelector('.answer__input').value;
	return state[localStorage.stateNum - 1].answer === answer;
}

//обрабатывает ответ и меняет состояние
function changeState(stage) {
	localStorage.stateNum++;
	localStorage.hintNum = 0;
	stage.querySelector('.btn_help').disabled = true;
	stage.querySelector('.btn_answer').disabled = true;
	stage.querySelector('.answer__input').disabled = true;
	if (localStorage.stateNum - 1 < stages.length) {
		stages[localStorage.stateNum - 1].classList.remove('hidden');
	}
}

//переключение предупреждающего сообщения
function toggleAlert() {
	alert.classList.toggle('active');
	overlay.classList.toggle('active');
}

//событие - отправить ответ
for (let stage of stages) {
	stage.querySelector('.btn_answer').addEventListener('click', function () {
		if (checkAnswer(stage)) {
			changeState(stage);
		} else {
			toggleAlert();
			//stage.querySelector('.disp-msg').classList.add('hidden');
		};
	})
}

//при нажатии на logo обнуляется localStorage
document.querySelector('.logo').addEventListener('click', function () {
	localStorage.stateNum = 1;
	localStorage.hintNum = 0;
	location.reload();
});

//закрытие предупреждающего сообщения
document.querySelector('.btn_alert').addEventListener('click', toggleAlert);




