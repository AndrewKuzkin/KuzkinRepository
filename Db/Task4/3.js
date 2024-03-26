db.users.updateOne(
  { login: 'Kuzmich'},
  { $unset: { key: "", val: "" } }
);


