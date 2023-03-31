'use strict'

console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})

promise1.then(res => {
console.log(res)
})

console.log('end');

/* В консолі побачимо: 
start -  синхронний код;
1 - колбек промісу потрапляє в стек і виконується одразу;
end - синхронний код;
2 - колбек методу then асинхронний, потрапляє в чергу, виконується останнім.
*/


Promise.resolve(1)											// Результатом виклику буде 2.
		.then((x) => x + 1)									// then  бере параметр з resolve, тому поверне 1 + 1 тобто 2.		
		.then((x) => { throw new Error('My Error') })		// видасть помилку
		.catch(() => 1)										// помилку перехопить catch і поверне 1.
		.then((x) => x + 1)									// then знову бере параметр з resolve, тому поверне 1 + 1 тобто 2.
		.then((x) => console.log(x))						// метод then аргументом приймає 2(результат попереднього then). В консолі побачимо 2.
		.catch(console.error)								// нічого не поверне, так як вище у двох then не було помилки



const promise = new Promise(res => res(2));
        promise.then(v => {			// метод then аргументом приймає 2
                console.log(v); 	// в консолі побачимо 2 
                return v * 2;		// поверне 4
            })
            .then(v => {			// метод then аргументом приймає 4 
                console.log(v);		// в консолі побачимо 4 
                return v * 2;		// поверне 8
            })
            .finally(v => {
                console.log(v);		// в консолі побачимо undefined, тому що метод finally не отримує аргументів
                return v * 2;	
            })
            .then(v => {			// метод then аргументом приймає 8
                console.log(v);		//в консолі побачимо 8
            });