db.users.findOneAndReplace(
  { name: "Andrew" }, // Условие выборки документа для замены
  { name: "Андрей", login: "Kuzmich", 	email: "kuzkin@cemi.rssi.ru" }, // Новый документ для замены
  { returnDocument: "after" } // Опция, указывающая возвращать документ после замены
);
