const startButton = document.getElementById('start__btn');

startButton.addEventListener('click', function () {
  //массив
  const words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'кот',
    'собака',
    'код',
    'квартира',
    'машина',
    'банан',
    'цветок',
    'телевизор',
    'телефон',
    'учитель',
    'велосипед',
  ];
  //выбор случайного слова
  const word = words[Math.floor(Math.random() * words.length)];

  const answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  let remainingLetters = word.length;
  let attempts = 10; // количество попыток
  let isHit = false; // совпадений ещё не было
  //игровой цикл
  while (remainingLetters > 0 && attempts > 0) {
    alert(answerArray.join(' '));
    // запрашиваем вариант ответа
    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');
    guess = guess.toLowerCase(); // меняет регистр если написали с Большой буквы
    if (guess === null) {
      // выход из игрового цикла
      break;
    } else if (guess.length !== 1) {
      alert('Пожалуйста, введите только одну букву.');
    } else {
      isHit = false; // игрок ввел 2 буквы и попытки не отнялись
      // обновляем состояние игры
      for (let j = 0; j < word.length; j++) {
        let letterWasEntered = answerArray[j] === guess;
        if (letterWasEntered) {
          alert('Вы уже вводили эту букву');
          break;
        }
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
          isHit = true; // 2 раза ввели одну буку и isHit отработал снял попытку
        }
      }
      //отрицание isHit не  false, если не угадал букву снимает одну попытку
      if (!isHit) {
        attempts--;
        alert('У Вас осталось ' + attempts + ' попыток');
        if (attempts === 0) {
          alert('Ваши попытки закончились');
          break;
        }
      }
    }
    //конец
  }
  //ответ и поздравление
  alert(answerArray.join(' '));
  alert('Отлично! Было загадано слово ' + word);
});
