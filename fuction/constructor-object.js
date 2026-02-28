function Person(f,l,fn){
    this.fristName = f ;
    this.lastName = l ;
    this.fullName = fn ;
}

let sname = new Person("Sumi", "Akter Dim", "Sumi Pare Dim,MIM Khay DIM");
console.log(sname.fullName)