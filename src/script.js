const state = [
	{
		id: 1,
		name: 'stage1-01',
		answer: ['2012'],
		message: 'Ищите коробку 2012 на балконе',
		hints: [
			'Обратите внимание на цифры.',
			'Проссумируйте все цифры.',
			'Введите 2012.'
		]
	},
	{
		id: 2,
		name: 'stage1-02',
		answer: ['ЖЕСТОКОЕ УБИЙСТВО'],
		message: "Ищите дело с надписью 'Жестокое убийство'",
		hints: [
			'Алфавит.',
			'А-1, О-16, Ш-27',
			'Каждая цифра соответсвует номеру буквы в алфавите.',
			'Введите ЖЕСТОКОЕ УБИЙСТВО.'
		]
	},
	{
		id: 3,
		name: 'stage1-03',
		answer: ['ОРГИЯ'],
		message: 'Правильно, это ОРГИЯ. Продолжайте искать предметы.',
		hints: [
			'Введите ОРГИЯ.'
		]
	},
	{
		id: 4,
		name: 'stage1-04',
		answer: ['ЭЛЕКТРИЧЕСТВО'],
		message: 'Правильно, это ЭЛЕКТРИЧЕСТВО. Продолжайте искать предметы.',
		hints: [
			'Швальта - это глазурь, приготовленная из кобальтовых руд....',
			'...голубого или синего цвета.',
			'Введите ЭЛЕКТРИЧЕСТВО.'
		]
	},
	{
		id: 5,
		name: 'stage1-05',
		answer: ['ПАУТИНА'],
		message: 'Правильно, это ПАУТИНА. Продолжайте искать предметы.',
		hints: [
			'Введите ПАУТИНА.'
		]
	},
	{
		id: 6,
		name: 'stage1-06',
		answer: ['ЛОЖКА'],
		message: 'Правильно, это ЛОЖКА. Продолжайте искать предметы.',
		hints: [
			'Ведите ЛОЖКА'
		]
	},
	{
		id: 7,
		name: 'stage1-07',
		answer: ['ВРАЧ', 'ДОКТОР', 'ПСИХИАТР', 'ВРАЧОМ', 'ДОКТОРОМ', 'ПСИХИАТРОМ'],
		message: "'Всё ясно!!! Убитый был врачом, но кто и за что его убил?!'\nДверь открылась и капитан вошел во вторую комноту.",
		hints: [
			'Введите ВРАЧ'
		]
	},
	{
		id: 8,
		name: 'stage2-01',
		answer: ['ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА', 'ПСИХБОЛЬНИЦА', 'ПСИХ. БОЛЬНИЦА', 'ПСИХ БОЛЬНИЦА'],
		message: "Все верно! А теперь найдите ключ под кроватью.",
		hints: [
			'Введите ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА'
		]
	},
	{
		id: 9,
		name: 'stage2-02',
		answer: ['1.10 19 28 37', '110192837', '1.10192837'],
		message: "Все верно!",
		hints: [
			'Введите 1.10 19 28 37'
		]
	}
];

const stages = document.querySelectorAll('.stage');
const alert = document.querySelector('.alert');
const alertMsg = document.querySelector('.alert__msg');
const overlay = document.querySelector('.overlay');
const btnAlert = document.querySelector('.btn.btn_alert');
const btnMsg = document.querySelector('.btn_msg');
const btnPlay = document.querySelector('.btn_play');
const fotoMsg = document.querySelector('.foto-msg');
const btnClose = document.querySelector('.foto-msg__close');

const audio = new Audio();

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
	for (let i = 0; i < localStorage.stateNum - 1; i++) {
		stages[i].querySelector('.btn_help').disabled = true;
		stages[i].querySelector('.btn_answer').disabled = true;
		stages[i].querySelector('.answer__input').disabled = true;
		stages[i].querySelector('.answer__input').value = state[i].answer[0];
	}

	for (let i = 0; i < localStorage.hintNum; i++) {
		let hint = createHint(localStorage.stateNum - 1, i);
		addHint(stages[localStorage.stateNum - 1], hint);
	}

	for (let i = localStorage.stateNum; i < stages.length; i++) {
		//stages[i].classList.add('hidden');
		stages[i].style.display = 'none';
	}

	stages[localStorage.stateNum - 1].querySelector('.btn_help').disabled = true;
	setTimeout(() => stages[localStorage.stateNum - 1].querySelector('.btn_help').disabled = false, TIME_OUT);
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
	const answer = stage.querySelector('.answer__input').value.toUpperCase().trim();
	return state[localStorage.stateNum - 1].answer.includes(answer);
}

//обрабатывает ответ и меняет состояние
function changeState(stage) {
	generatorMessage(state[localStorage.stateNum - 1].message);
	localStorage.stateNum++;
	localStorage.hintNum = 0;
	stage.querySelector('.btn_help').disabled = true;
	stage.querySelector('.btn_answer').disabled = true;
	stage.querySelector('.answer__input').disabled = true;
	if (localStorage.stateNum - 1 < stages.length) {
		//stages[localStorage.stateNum - 1].classList.remove('hidden');
		stages[localStorage.stateNum - 1].style.display = 'flex';
		stages[localStorage.stateNum - 1].querySelector('.btn_help').disabled = true;
		setTimeout(() => stages[localStorage.stateNum - 1].querySelector('.btn_help').disabled = false, TIME_OUT);
	}
}

//генерирует сообщение в модальном окне
function generatorMessage(msg) {
	alertMsg.textContent = msg;
}

//переключение предупреждающего сообщения
function toggleAlert() {
	alert.classList.toggle('active');
	overlay.classList.toggle('active');
}

//событие - отправить ответ по клику по кнопке
for (let stage of stages) {
	stage.querySelector('.btn_answer').addEventListener('click', function () {
		if (checkAnswer(stage)) {
			changeState(stage);
		} else {
			generatorMessage('Неправильно! Подумай еще или воспользуйся подсказкой.');
		};
		toggleAlert();
	});
}

//при нажатии на logo обнуляется localStorage
document.querySelector('.logo').addEventListener('click', function () {
	localStorage.stateNum = 1;
	localStorage.hintNum = 0;
	location.reload();
});

//закрытие предупреждающего сообщения
btnAlert.addEventListener('click', toggleAlert);

//проиграть аудио
function playAudio() {
	audio.src = '../assets/audio/voice.mp3';
	audio.play();
}

//запуск звука
btnPlay.addEventListener('click', playAudio);

//переключения всплывающего сообщения
function toggleFotoMsg() {
	fotoMsg.classList.toggle('active');
	overlay.classList.toggle('active');
}

//переключение сообщения с фотографией
btnClose.addEventListener('click', toggleFotoMsg);
btnMsg.addEventListener('click', toggleFotoMsg);
