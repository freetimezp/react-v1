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


const app = (
	<div className="app">
		<div className="list">
			<Car car={{ 
				name: 'BMW M2 Coupe', 
				price: '20000',
				img: 'img/bmw-m2-1.jpg'
			 }} />
			 <Car car={{ 
			 	name: 'Audi TT',
		  	price: '15000',
			  img: 'img/audi-tt-1.jpg'
   	 }} />
			 <Car car={{ 
			 	name: 'Rolls Royce',
		  	price: '50000',
		  	img: 'img/rolls-royce-1.jpg'
	    }} />
			 <Car car={{ 
			 	name: 'Mercedes amg',
		  	price: '18000',
		  	img: 'img/mercedes-amg-1.jpg'
	    }} />
	 </div>
	</div>
)


ReactDOM.render(app, document.getElementById('root'))