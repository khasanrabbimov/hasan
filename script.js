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





let car = [ 
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


let cars_price = [100000, 500000, 145000, 37000,  20000, 10000,  40000, 14000,  ]
let upto = prompt('на какую машину u вас хватает денег?')
let filtered = cars_price((item) => {
    if(item.price >= cars_price) {
        console.log(item);
    }
})
console.log(
    'По вашему запросу найдено ${filtered.length} машин ${filtered}'
);
console.log(cars_price);
   let year = cars.filter(item => {
     if (item.Details.Year >= 2020) {
        console.log(item);
     }
       })

 