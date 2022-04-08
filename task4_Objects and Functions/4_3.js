// -В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
//(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
let terminalName = "Denis"; //empty or Denis
function whoIsThis(name) {
  if (name == "Denis") {
    console.log(`Привет ${name}`);
  } else {
    console.log("нет такого имени");
  }
}
whoIsThis(terminalName);
