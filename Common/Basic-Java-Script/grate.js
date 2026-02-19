const prompt = require('prompt-sync')(); 
const prompt1 = prompt('Enter a letter: '); 
const promptUp = prompt1.toUpperCase();

switch (promptUp) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}