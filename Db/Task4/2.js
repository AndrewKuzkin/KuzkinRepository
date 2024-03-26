db.users.updateOne(
  { login: 'Kuzmich' },
  { $set: { val: 'email', email: 'kuzkin@mail.ru' } }
);
