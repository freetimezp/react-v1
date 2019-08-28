const cars = [
	{ name: 'BMW M2 Coupe', price: '20000', img: 'img/bmw-m2-1.jpg'},
	{ name: 'Audi TT',	price: '15000',	img: 'img/audi-tt-1.jpg'},
	{ name: 'Rolls Royce',	price: '50000',	img: 'img/rolls-royce-1.jpg'},
	{ name: 'Mercedes amg',	price: '18000',	img: 'img/mercedes-amg-1.jpg'}
]

function createCar(car) {

 return `
		<div class="card">	
			<div class="card-img">	
				<img src="${car.img}" alt="${car.name}">
			</div>
			<h3>${car.name}</h3>
			<span>${car.price}$</span>
		</div>
 `
};

const templates = cars.map(car => createCar(car));
const html = templates.join(' ');

document.querySelector('.list').innerHTML = html; 