function Car(props) {
	return (
		<div className="card">	
			<div className="card-img">	
				<img 
					src={props.car.img} 
					alt={props.car.name} />
			</div>
			<h3>{props.car.name}</h3>
			<p>{props.car.price} $</p>
		</div>
		)
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
				return ( <Car car={car} key={car.name + Math.random()} />	)
		}) 
 }




	render() {
		return (
			<div className="app">
				<div className="list">
					{ this.renderCars() }
		 	</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))