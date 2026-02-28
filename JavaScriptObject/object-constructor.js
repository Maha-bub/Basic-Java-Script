function person(FirstName, Name, fullname){
    this.FirstName= FirstName;
    this.LastName = Name;
    this.FullName = fullname;
}
let Identity = new person("Mahabub"+ "Alam"+"Mahabub Alam");
console.log(Identity.FirstName + " " +Identity.LastName);