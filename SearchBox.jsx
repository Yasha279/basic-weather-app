import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '60dfb46c0bbe7327f2a2d96d7233ffee';

    let getWeatherInfo = async () => {
        //if (!city) return;

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await response.json();
            //console.log(jsonRes);
            let result = {
                city: jsonRes.name,            
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            }
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");  // Clears input field after submitting
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch (err) {
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='city'
                    variant='outlined'
                    label='City Name'
                    required
                    value={city}
                    onChange={handleChange}  // Binding the handleChange function
                />
                <br />
                <br />
                <Button variant='contained' type="submit">Search</Button>
                {error && <p style={{color: "red"}}>No such place find</p> }
            </form>
        </div>
    );
}
