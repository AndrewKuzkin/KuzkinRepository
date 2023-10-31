function task(name, familyname, login = 'mylogin') {
    this.name = name;
    this.familyname = familyname;
    this.login = login;
        this.getFullName = () => {return this.name+' '+this.familyname+'!'}
}

const person = new task('Andrew', 'Kuzkin'); // А третий параметр по-умолчанию
console.log(person.getFullName());
console.log(person.login)
