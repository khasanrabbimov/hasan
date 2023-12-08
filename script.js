/* let boy = {
name: 'Abdumannon',
surname: 'Ilhomov',
birthdate: '26 march, 2010',
weigh:  '45kg',
heigh: '158sm',
himself: {
    child: '1st child',
    characteristic: 'charismatic',
    school: '27',
    class: '7b',
    
}
}
console.log(boy.name, boy.surname, boy.birthdate, boy.himself.class, boy.himself.child); */




/* 
let cars = [ 
    {
      
            model: 'Rolce Royc Mansory',
            coompany: 'Rolce Royce',
            year: 2023, 
            price: 500000,
            country: 'England',
            details: {
                colour: 'blue',
                wheels: 4,
                hatch: true,
                beaten: false,
                mileAge: 200000,
        
            } , owners: ['no one']  
        }, 
       {
            model: 'BMW m5',
            coompany: 'BMV',
            year: 2020, 
            price: 145000,
            country: 'Germany',
            details: {
                colour: 'black',
                wheels: 4,
                hatch: true,
                beaten: false,
                mileAge: 400000,
        
            } , owners: ['no one']  
        }, 
       {
            model: 'Malibu turbo',
            coompany: 'gm',
            year: 2021, 
            price: 37000,
            country: 'Uzb',
            details: {
                colour: 'black',
                wheels: 4,
                hatch: true,
                beaten: false,
                mileAge: 280000,
        
            } , owners: ['no one']  
        }, 
      {
            model: 'Nexia 3',
            coompany: 'gm',
            year: 2017, 
            price: 20000,
            country: 'Uzb',
            details: {
                colour: 'white',
                wheels: 4,
                hatch: true,
                beaten: false,
                mileAge: 9000,
        
            } , owners: ['Al Safir , Shaxboz']  
        },
       {
            model: 'nexia',
            coompany: 'gm',
            year: 2000, 
            price: 10000,
            country: 'Uzb',
            details: {
                colour: 'white',
                wheels: 4,
                hatch: false,
                beaten: true,
                mileAge: 20000,
        
            } , owners: ['Bexruz, Shaxboz, Radmir, Al Safir']  
        },
     {
            model: 'Equinox Redline',
            coompany: 'Equinox',
            year: 2023, 
            price: 40000,
            country: 'USA',
            details: {
                colour: 'white',
                wheels: 4,
                hatch: true,
                beaten: false,
                mileAge: 200000,
        
            } , owners: ['no one']  
        },
        {
            model: 'Lacceti',
            coompany: 'gm',
            year: 2003, 
            price: 14000,
            country: 'Uzb',
            details: {
                colour: 'white',
                wheels: 4,
                hatch: true,
                beaten: true,
                mileAge: 8000,
        
            } , owners: ['Andumannon, Bexruz, Shaxboz']  
        
        },
        
        
    
    
] */


// let cars_price = [100000, 500000, 145000, 37000,  20000, 10000,  40000, 14000,  ]
// let upto = prompt('на какую машину u вас хватает денег?')
// let filtered = cars_price((item) => {
//     if(item.price >= cars_price) {
//         console.log(item);
//     }
// })
// console.log(
//     'По вашему запросу найдено ${filtered.length} машин ${filtered}'
// );
// console.log(cars_price);
//    let year = cars.filter(item => {
//      if (item.Details.Year >= 2020) {
//         console.log(item);
//      }
//        })
//  */
/* let boy = {
name: 'Abdumannon',
surname: 'Ilhomov',
birthdate: '26 march, 2010',
weigh:  '45kg',
heigh: '158sm',
himself: {
    child: '1st child',
    characteristic: 'charismatic',
    school: '27',
    class: '7b',
    
}
}
console.log(boy.name, boy.surname, boy.birthdate, boy.himself.class, boy.himself.child); */







/* let people = [
    {
        name: 'Al Safir',
        surname: 'Bozorov',
        birth_date:'20 December 2008',
weigh: '55kg',
heigh: '170 sm',
country: "UZB",
city: 'Samarkand',
himself: {
child: 'first child',
characteristic: 'curious',
school: 24,
class: '9z'
}

    },
]


let second_person = [
    
    {
        name: "Shaxboz",
        surname: 'Aminov',
        birth_date:'27 June 2008',
        weigh: '60kg',
        heigh: '175 sm',
        country: "UZB",
        city: 'Samarkand',
        himself: {
            child: 'second child',
    characteristic: 'charismatic',
    school: 29,
    class: '9a'
}

}


]
Object.assign({}, people, second_person);
Object.freeze(people);
Object.keys(people, [0]);
Object.keys(second_person, [0] );
Object.values(people);
Object.values(second_person);
concat(people);
concat(second_person);
console.log(people, second_person);


 */

/* let types = {
    string: [],
    number:[],
    object: [],
    boolean: []
}




let new_object = Object.assign({}, people, second_person)
let keys = Object.keys(new_object)
let values = Object.values(new_object)
let arr = keys.concat(values)
console.log(arr);

arr.filter((item) => {
    if(item => typeof item === 'string') {
        types.string.push(item)
    }else if(item => typeof item === 'number') {
        types.string.push(item)
    }else if(item => typeof item === 'object') {
        types.string.push(item)
    }else{
        types.boolean.push(item)
    }
})
console.log(arr, types);
 */


/* let discount = prompt("Сколько сделать скидку")

for(let item of cars) {
    let atveti = item.price - ((item.price / 100) * discount)

    console.log(item.model);
    console.log(atveti);
}


*/


/* let pwd = 7777
let question
do{
    question = prompt('Введите пароль')

}while (question != pwd); */


let parol = 7777
let user;
let number = 0;
min = 0
max = 5
do {
  user = prompt('Веведите пароль');
  min++
 if(user !== parol) {
  if(min < max) {
    alert('Error')
  }
 }
}while (user != parol && min > max)
if(user != pwd) {
    alert('Слишком много попыток, пожалуйста повтроите позже');
}else{
    alert('Pass');
}