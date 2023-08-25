const container = document.querySelector('.numbers');
const numberofparagraphs = 100;
for (let i = 0; i < numberofparagraphs ; i++) {
    if(i % 10 ===0 ){
        const paragraph = document.createElement('p');
        paragraph.textContent = `paragraph for ${i}`;
        container.appendChild(paragraph);
    }
}


let names = ["Max" , "Andrei" , "Alexei" , "Roma"];
const StringConstainer = document.querySelector('.string_container');
for (let index = 0; index < names.length; index++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = names[i];
    StringConstainer.appendChild(paragraph);
}


const user1 = [
    {first_name: 'Max' , last_name: 'Stirbu' , age: 22} ,
    {first_name: 'Andrei' , last_name: 'Cipcea' , age: 22} ,
    {first_name: 'Alexei' , last_name: 'Nagornii' , age: 22} ,
    {first_name: 'Roma' , last_name: 'Morari' , age: 22} ,
];

const adultPerson = user1.filter((user) => user.age>=18);