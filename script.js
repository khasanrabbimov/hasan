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
        
        
    
    
] 
 */

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


/*  let parol = 7777
let user;
let number = 0;
min = 0
max = 5
do {
  user = prompt('Веведите пароль');
  min++
 if(user !== parol) {

 }
}while (user != parol && min > max)
if(user != parol) {
    alert('Error');
}else {
    alert('Pass');
}
  */

 


 
/* let arr = ["hasan, husen, akobir, chushpan, hasan baran"]
let longestName = ''
for (let name of arr) {
    if (name.length > longestName.length) {
        longestName = name;
    }
}
console.log(longestName);


let double_dliniy = " "

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > double_dliniy.length) {
        double_dliniy = arr[i];
    }
}
console.log( double_dliniy);  */



// Раскидать людей в разные массивы в зависимости от их почты
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
let emails = {
    
    org: [],
    net: [],
    info: []
}
let other = []

for(let user of users) {
    let hayvan =  user.email.split('.').pop() 
    if(hayvan  === 'org') {
emails.org.push(user)
    } else if(hayvan === "net") {
        emails.net.push(user)
    } else if(hayvan === "info") {
        emails.info.push(user)
    } else{
        other.push(user)
    }
}


console.log(emails,other);