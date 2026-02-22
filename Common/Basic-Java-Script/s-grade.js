let mark=45;
switch(true){
    case (mark>=33 && mark <=39):
        console.log("D");
        break;
    case (mark>=40 && mark <=49):
        console.log("C-");
        break;
    case (mark>=53 && mark <=59):
        console.log("C");
        break;
    case (mark>=60 && mark <=69):
        console.log("B+");
        break;
    
    case (mark>=80 && mark <=100):
        console.log("A+");
        break;
    default:
        console.log("F"); 
}