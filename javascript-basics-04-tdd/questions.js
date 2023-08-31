
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
return text.replace('e',' ')
}
const concatString = (text1, text2) => {
return text1.concat(text2)
}
const showChar5 = (text) => {
return text.charAt(4)
}
const showChar9 = (text) => {
return text.slice(0,9)
}
const toCapitals = (text) => {
return text.toUpperCase()
}
const toLowerCase = (text) => {
return text.toLowerCase()
}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
if(typeof text ==="string"){
return true;
}
}
const getExtension = (text) => {
const extensionStart=text.indexOf(".")+1;
const extensionEnd=text.length ;
return text.slice(extensionStart,extensionEnd);
}
const countSpaces = (text) => {
let count=0;
for (let c of text){
if(c===" "){
count++;
}
}
    return count;
}
const InverseString = (text) => {
let reverseText="";
for(let i=text.length-1;i>=0;i--){
reverseText+=text[i];
}
console.log(reverseText);
return reverseText;
}
    
const power = (x, y) => {
return Math.pow(x,y);
}
const absoluteValue = (num) => {
return Math.abs(num);
}
const absoluteValueArray = (array) => {
return array.map(arr=>{return Math.abs(arr)});
}
const circleSurface = (radius) => {
return Math.round(Math.PI*radius*radius);
}
const hypothenuse = (ab, ac) => {
const result=ab*ab + ac*ac;
return Math.sqrt(result);
}
const BMI = (weight, height) => {
const result=weight/(height*height);
return parseFloat(result.toFixed(2));
}
    
const createLanguagesArray = () => {
const arr=["Html","CSS","Java","PHP"];
return arr;
}
    
const createNumbersArray = () => {
const arr=[0,1,2,3,4,5];
return arr;
}
    
const replaceElement = (languages) => {
languages[2]="Javascript";
return languages;
}
    
const addElement = (languages) => {
languages.push("Ruby","Python");
return languages;
}
    
const addNumberElement = (numbers) => {
numbers.unshift(-2,-1);
return numbers;
}
    
const removeFirst = (languages) => {
languages.shift();
return languages;
}
    
const removeLast = (languages) => {
languages.pop();
return languages;
}
    
const convertStrToArr = (social_arr) => {
return social_arr.split(",");
}
    
const convertArrToStr = (languages) => {
return languages.join();
}
    
const sortArr = (social_arr) => {
return social_arr.sort();
}
    
const invertArr = (social_arr) => {
return social_arr.reverse();
}