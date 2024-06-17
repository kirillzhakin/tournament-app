// Типы данных:
// tm_id: "1309866", - ID участника турнира
// player_id: "90045", - ID спортсмена
// name: "Куценко Елизавета Игоревна", - Полные ФИО спортсмена
// name_tour: "Куценко Е.И", - Обозначение спортсмена для турнира
// gender: "2", - Пол: 1-м, 2-ж
// rtt_number: "40678", - РНИ
// birth_date: "2009-10-06", - Дата рождения
// doc_city: "Санкт-Петербург", - Город регистрации
// pay_tour: "0.00", -  Оплата за участие в турнире (сумма)
// join_date: "2022-05-18", - Дата заявки
// comment: "", - Примечание
// stage: "ОТ", - Этап турнира

export interface Player {
  tm_id: string;
  player_id: string;
  name: string;
  name_tour: string;
  gender: string;
  rtt_number: string;
  birth_date: string;
  doc_city: string;
  pay_tour: string;
  join_date: string;
  comment: string;
  stage: string;
  [key: string]: unknown;
}
