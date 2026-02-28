const person={
    Name: "Mahabub",
    age:23,
    Height:"inch",
    Nationality:"Bangladesh",
    Position:"Deputi Maneger",
    Identity:function(){
        return `My name is ${this.Name}`;
    },
    Position: function(){
        return `I'm ${this.age} years old.`;
    },
    Origin: function(){
        return `I'm come from ${this.Nationality}.`;
    }

}

console.log(person.Identity());
console.log(person.Position());
console.log(person.Origin());