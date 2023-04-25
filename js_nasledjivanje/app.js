//freecodecamp

// klasa osoba klasa radnik klasa profesor 

// class Osoba {
//     constructor(name, lastName, age){
//         this.name = name,
//         this.lastName = lastName,
//         this.age = age
//     }

//     fullName = () =>{
//         console.log(`${this.name} ${this.lastName}`);
//     }
// }

// class Radnik extends Osoba{
//     constructor(workSpace,hours, name, lastName, age){
//         super(name, lastName, age)
//         this.workSpace = workSpace
//         this.hours = hours
//     }

//     salary = () =>{
//         this.hours * 10;
//     }
// }

// class Profesor extends Radnik{
//     constructor(subject, workSpace, hours, name, lastName, age) {
//         super(workSpace, hours, name, lastName, age)
//         this.subject = subject
//     }

//     presentYourself = () =>{
//        console.log(`Hi my name is ${this.name} ${this.lastName}, my subject is ${this.subject}`);
//     }
// }

// const prof1 = new Profesor("Matematika", "skola", 11, "Faris", "Mecinovic", 21)
// const osoba1 = new Osoba("Esma", "Becovic", 21)
// prof1.presentYourself()
// osoba1.fullName()
// console.log(prof1);


class Person {
    constructor (name, lastName, age){
        this.name = name,
        this.lastName = lastName,
        this.age = age
    }
    move = () => console.log("Start to move...");
}

class Emplyee extends Person{
    constructor(job, position, hRate, name, lastName, age) {
        super(name, lastName, age)
        this.job = job,
        this.position = position,
        this.hRate = hRate
    }
    introduction = () => console.log(`My name is ${this.name} ${this.lastName} and I work as ${this.job} an my position is ${this.position}`);
    calculateMonthlyIncome = () => this.hRate * 40 * 4;
}

class Engineer extends Emplyee{
#favCollege;

    constructor(favCollege, degree, langs, job, position, hRate, name, lastName, age) {
        super(job, position, hRate, name, lastName, age)
        this.#favCollege = favCollege
        this.degree = degree,
        this.langs = langs
    }

    learnNewLanguage = (lang) =>{
        console.log("Learn new language" , lang);
        for(let i = 0; i < 9; i++){}

        console.log("Successfully learned new language");
        this.langs = [...this.langs, lang]
    }

    getFavCollege = () => this.#favCollege;
    setFavCollege = (college) =>(this.#favCollege = college);
}

const e  = new Engineer(
   "edina", false, ["js", "python"], "engineer", "senior", 20, "esma", "becovic", 21
)
console.log(e.getFavCollege());
e.setFavCollege("coka")
console.log(e.getFavCollege());
 
console.log(e);
e.learnNewLanguage("c#")
