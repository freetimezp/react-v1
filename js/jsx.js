const e = React.createElement



function Car(props) {
	return e('div', {className: 'card'}, [
			e('div', {className: 'card-img', key: 'divA'}, e('img', {src: props.car.img, alt: props.car.name})),
			e('h3', {key: 'divB'}, props.car.name),
			e('p', {key: 'divC'}, props.car.price)
	 ])
 }

class App extends React.Component {

	state = {
		cars: [
			{ name: 'BMW M2 Coupe', price: '20000', img: 'img/bmw-m2-1.jpg'},
			{ name: 'Audi TT',	price: '15000',	img: 'img/audi-tt-1.jpg'},
			{ name: 'Rolls Royce',	price: '50000',	img: 'img/rolls-royce-1.jpg'},
			{ name: 'Mercedes amg',	price: '18000',	img: 'img/mercedes-amg-1.jpg'}
 	]
 }

 renderCars() {
 	return this.state.cars.map(car => {
				return e(Car, {car: car, key: car.name + Math.random()})
		}) 
 }




	render() {
		return e(
			'div', 
			{className: 'app'},
			e(
				'div', 
				{className: 'list'}, 
				this.renderCars() 
				) 
			)
	}
}

ReactDOM.render(e(App), document.getElementById('root'))