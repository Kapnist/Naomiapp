import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';
//tuto https://www.youtube.com/watch?v=uJYqQdnw8LE


export default function Search() {
   
    const [address, setAddress] = React.useState("")
    

    const handleSelect = async value =>{
      const results= await geocodeByAddress(value);
    
    }
 
      return (
        <div className='recherche'>
         
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect} 
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
              
                <input type="text" 
                  {...getInputProps({
                    placeholder: 'Ou allez vous...',
                    className: 'location-search-input',
                  })} 
                />
                <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) =>{
                     
                          const style ={
                              backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                          }
                          return (
                              <div {...getSuggestionItemProps(suggestion, { style })}>
                                  {suggestion.description}
                                  
                              </div>
                          );

                    })}
                   
                </div>
              
              </div>
            )}
          </PlacesAutocomplete >
          <button className="btn btn-success btn_valider">valider</button>
          
        </div>
      );
    }

  


