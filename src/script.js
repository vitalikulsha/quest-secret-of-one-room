const state = [
	{
		id: 1,
		name: 'stage1-01',
		answer: ['2012'],
		message: 'Ищите коробку 2012 на балконе',
		hints: [
			'Обратите внимание на цифры.',
			'Просуммируйте все цифры.',
			'А про двойку не забыли?'
		]
	},
	{
		id: 2,
		name: 'stage1-02',
		answer: ['ЖЕСТОКОЕ УБИЙСТВО'],
		message: "Ищите дело с надписью 'Жестокое убийство'",
		hints: ['Воспользуйтесь алфавитом.']
	},
	{
		id: 3,
		name: 'stage1-03',
		answer: ['МАССАЖ'],
		message: 'Правильно, это МАССАЖ.',
		hints: []
	},
	{
		id: 4,
		name: 'stage1-04',
		answer: ['ЭЛЕКТРИЧЕСТВО'],
		message: 'Правильно, это ЭЛЕКТРИЧЕСТВО. Продолжайте искать предметы.',
		hints: [
			'Шмальта - это глазурь, приготовленная из кобальтовых руд....',
			'...голубого или синего цвета.'
		]
	},
	{
		id: 5,
		name: 'stage1-05',
		answer: ['ПАУТИНА'],
		message: 'Правильно, это ПАУТИНА. Продолжайте искать предметы.',
		hints: []
	},
	{
		id: 6,
		name: 'stage1-06',
		answer: ['ЛОЖКА'],
		message: 'Правильно, это ЛОЖКА. Продолжайте искать предметы.',
		hints: []
	},
	{
		id: 7,
		name: 'stage1-07',
		answer: ['ВРАЧ', 'ДОКТОР', 'ПСИХИАТР', 'ВРАЧОМ', 'ДОКТОРОМ', 'ПСИХИАТРОМ'],
		message: "'Теперь всё ясно! Убитый был доктором и звали его Алан. Но кто и за что его убил?!'",
		hints: []
	},
	{
		id: 8,
		name: 'stage1-08',
		answer: ['1-10-19-28-37'],
		message: "Все верно!",
		hints: []
	},
	{
		id: 9,
		name: 'stage1-09',
		answer: ['ПСИХИАТР', 'ПСИХИАТРОМ'],
		message: "Теперь детективу стало все понятно: убитый был психиатром, но при чем тут найденные предметы оставалось не ясным. Дверь открылась, и детектив зашел во вторую комнату...",
		hints: []
	},
	{
		id: 10,
		name: 'stage2-01',
		answer: ['ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА', 'ПСИХБОЛЬНИЦА', 'ПСИХ. БОЛЬНИЦА', 'ПСИХ БОЛЬНИЦА', 'ПСИХУШКА'],
		message: "Осторожно! Там под кроватью может быть кто-то.",
		hints: []
	},
	{
		id: 11,
		name: 'stage2-02',
		answer: ['ИСТЕРИЯ', 'ИСТЕРИЧКА', 'ИСТЕРИКА'],
		message: "Все верно! Это ИСТЕРИЯ.",
		hints: []
	},
	{
		id: 12,
		name: 'stage2-03',
		answer: ['МАССАЖ МАТКИ', 'МАТКИ МАССАЖ', 'МАССАЖЕМ МАТКИ'],
		message: "Все верно! Истерию доктор лечил через массаж матки.",
		hints: []
	},
	{
		id: 13,
		name: 'stage2-04',
		answer: ['ОЛИГОФРЕНИЯ', 'ОЛИГОФРЕН', 'ОЛИГОФРЕНИК'],
		message: "Все верно! Это ОЛИГОФРЕНИЯ.",
		hints: []
	},
	{
		id: 14,
		name: 'stage2-05',
		answer: [
			'ЭЛЕКТРИЧЕСКОГО СТУЛА',
			'ЭЛЕКТРИЧЕСКИЙ СТУЛ',
			'ЭЛЕКТРИЧЕСКИМ СТУЛОМ',
			'ЭЛЕКТРОСТУЛА',
			'ЭЛЕКТРОСТУЛ',
			'ЭЛЕКТРОСТУЛОМ'
		],
		message: "Все верно! Олигофрению доктор лечил с помощью электрического стула.",
		hints: []
	},
	{
		id: 15,
		name: 'stage2-06',
		answer: [
			'ЧЕЛОВЕК-ПАУК',
			'ЧЕЛОВЕК ПАУК',
			'ЧЕЛОВЕКОМ-ПАУКОМ',
			'ЧЕЛОВЕКОМ ПАУКОМ'
		],
		message: "Все верно! Это ЧЕЛОВЕК-ПАУК.",
		hints: [
			'Сопоставить найденные предметы по №3',
			'В первой комнате был найден молоток и гвозди, ответом на загадку была паутина, во второй комнате в коробке №3 был найден паук'
		]
	},
	{
		id: 16,
		name: 'stage2-07',
		answer: [
			'ПРИБИЛ К ПОТОЛКУ',
			'ПРИБИЛ ГВОЗДЯМИ К ПОТОЛКУ',
			'ПРИБИЛ МОЛОТКОМ И ГВОЗДЯМИ К ПОТОЛКУ',
			'ПРИБИЛ МОЛОТКОМ К ПОТОЛКУ'
		],
		message: "Все верно! Доктор прибил Питера к потолку.",
		hints: []
	},
	{
		id: 17,
		name: 'stage2-08',
		answer: ['АНОРЕКСИЯ', 'АНОРЕКСИЧКА', 'АНОРЕКСИК'],
		message: "Все верно! Это АНОРЕКСИЯ.",
		hints: ['Симптомы: потеря аппетита, дефицит массы тела']
	},
	{
		id: 18,
		name: 'stage2-09',
		answer: [
			'ОТ ОБЕЗВОЖИВАНИЯ',
			'ОБЕЗВОЖИВАНИЯ',
			'ОБЕЗВОЖИВАНИЕ',
			'ОТ ОБЕЗВОЖИВАНИЯ ОРГАНИЗМА',
			'ОБЕЗВОЖИВАНИЯ ОРГАНИЗМА',
			'ОБЕЗВОЖИВАНИЕ ОРГАНИЗМА'
		],
		message: "Все верно! Это Бритни умерла от обезвоживания организма",
		hints: []
	},
	{
		id: 19,
		name: 'stage2-10',
		answer: ['ЛЮСИ'],
		message: "Все верно! Это Люси",
		hints: []
	},
	{
		id: 20,
		name: 'stage2-11',
		answer: ['АНТОНИО'],
		message: "Теперь всё становилось на свои места: Антонио был также пациентом доктора, которого он возможно также лечил.",
		hints: []
	},
	{
		id: 21,
		name: 'stage3-01',
		answer: ['СИМУЛЯНТ'],
		message: "Все верно! Это СИМУЛЯНТ.",
		hints: []
	},
	{
		id: 22,
		name: 'stage3-02',
		answer: ['АНТОНИО СИМУЛЯНТ'],
		message: "Все верно, Антонио - симулянт",
		hints: []
	},
	{
		id: 23,
		name: 'stage3-03',
		answer: [
			'ОН НЕ ТОТ ЗА КОГО СЕБЯ ВЫДАЕТ',
			'ОН НЕ ТОТ ЗА КОГО СЕБЯ ВЫДАЁТ',
		],
		message: "Все верно, Антонио не тот за кого себя выдает!",
		hints: []
	},
	{
		id: 24,
		name: 'stage3-04',
		answer: ['ЛЮСИ'],
		message: "Все именно так, это была Люси!",
		hints: []
	},
	{
		id: 25,
		name: 'stage3-05',
		answer: ['АНТОНИО ВЫДАВАЛ СЕБЯ ЗА ДОКТОРА АЛАНА'],
		message: "Все верно! Антонио выдавал себя за доктора Алана.",
		hints: []
	},
	{
		id: 26,
		name: 'stage3-06',
		answer: ['АЛАН НЕ ВИНОВЕН'],
		message: "Все верно! Алан не виновен.",
		hints: []
	},
	{
		id: 27,
		name: 'stage3-07',
		answer: ['АНТОНИО'],
		message: "Все верно! Погибшего звали Антонио.",
		hints: []
	},
	{
		id: 28,
		name: 'stage3-08',
		answer: ['1'],
		message: "Детектив, налив себе содержимое из этого сосуда, почувствовал облегчение, неужели дело считать закрытым? И все вокруг сказали 'ДААА!'",
		hints: []
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

const HELP_TITLE = '<span class="help__title">Подсказка: </span><br>';
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
		stages[i].style.display = 'none';
	}

	for (let i = 0; i < state.length; i++) {
		if (state[i].hints.length === 0) {
			stages[i].querySelector('.btn_help').style.display = 'none';
		}
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

//проверяет ответ
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
