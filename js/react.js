function Car(props) {

	const classes = ['card']

	if (props.car.marked) {
		classes.push('marked')
	}

	return (
		<div className={classes.join(' ')} onClick={props.onMark}>	
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
			{ marked: false, name: 'BMW M2 Coupe', price: '20000', img: 'img/bmw-m2-1.jpg'},
			{ marked: false, name: 'Audi TT',	price: '15000',	img: 'img/audi-tt-1.jpg'},
			{ marked: false, name: 'Rolls Royce',	price: '50000',	img: 'img/rolls-royce-1.jpg'},
			{ marked: false, name: 'Mercedes amg',	price: '18000',	img: 'img/mercedes-amg-1.jpg'}
 	],
 	visible: true,
 	appTitle: 'Cars application'
 }

	handleMarked(name) {
		const cars = this.state.cars.concat()

		const car = cars.find(c => c.name === name)
		car.marked = !car.marked

		this.setState({ cars: cars })

	}

	renderCars() {

		if (!this.state.visible) {
			return null
		}

		return this.state.cars.map(car => {
			return ( 
				<Car 
					car={car} 
					key={car.name + Math.random()} 
					onMark={this.handleMarked.bind(this, car.name)}
					/>	
				)
		}) 
	}

	toggleHandler() {
		this.setState({visible: !this.state.visible})
	}

	titleChangeHandler(title) {
		if (title.trim() === '') {
			return
		}

		this.setState({
			appTitle: title
		})
	}



	render() {
		const style = {
			marginBottom: 20
		}

		return (
			<div className="app">
			 <h1>{this.state.appTitle}</h1>
				<button 
					onClick={() => this.toggleHandler()}
					style={style}
					>Some button</button>
				<hr/>
				<input 
					type="text"
					placeholder="Change title"
					style={style}
					onChange={(event) => this.titleChangeHandler(event.target.value)}
					value={this.state.appTitle}
					/>
				<hr/>
				<div className="list">
					{ this.renderCars() }
		 	</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))