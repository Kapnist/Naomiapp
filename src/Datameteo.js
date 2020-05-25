import React, { Component } from 'react'
import Search from './Search.js';



class Datameteo extends Component {
	   state={
		        Data: [],
				temperature:"",
				ressenti:"",
				temp:"",
				humidité:"",
				lat:48.8534,
				lon:2.3488
		    }
		
		
		
		getData = () =>{
		 	fetch('http://api.openweathermap.org/data/2.5/weather?lat='+this.state.lat+'&lon='+this.state.lon+'&appid=ab8f6ea60e1035a28bf1dfda4de01f3e&units=metric')  // ici on utilise la fonction fetch qui est une fonction javascript à laquelle on passe directement notre url => (‘’ http//:la vieestbelle.com ’’) par exemple
		       .then(response => {
					if (response.ok) {
			response.json() // ici then nous permet de faire une promesse de chargement. En gros si c’est chargé, retourne moi le résultat sous forma JSON s’il te plait
		        	.then(res => this.setState({ Data: res, temperature:res.main.temp, ressenti:res.main.feels_like, temp:res.weather[0].description } )) // lorsque tu a le résultat, modifie la valeur de mon state en le stocquant dans la clé data.
					} else {
						console.error('server response : ' + response.status);
					}
		})    
		} 

    componentDidMount(){ // lorsque mon API est appelé, on pourra en fin monter notre composant grâce à la méthode componentDidMount que nous avons vu dans le cycle de vie d’un composant
        this.getData() // ici on fait donc appel à notre fonction 
	
    }

    render() {
        return (
            <div>
				<Search/>
				<h2>temperature: {this.state.temperature}</h2>
			
		    {console.log(this.state.Data)}
	
            </div>
        )
    }
}

export default Datameteo
