import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './InfoBox.css';

export default function InfoBox({ info }) {

    const INIT_URL = 'https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
    const HOT_URL = 'https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
    const COLD_URL = 'https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
    const RAIN_URL = 'https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=';

    const getWeatherIcon = () => {
        if (info.humidity > 80) {
            return <ThunderstormIcon style={{ fontSize: 30, color: 'blue' }} />;
        }
        if (info.temp > 30) {
            return <WbSunnyIcon style={{ fontSize: 30, color: 'orange' }} />;
        }
        return <AcUnitIcon style={{ fontSize: 30, color: 'lightblue' }} />; // cold
    };


    return (
        <div className="InfoBox">

            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 50 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center" }}
                        >
                            {getWeatherIcon()}
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}°C <br />
                            Humidity = {info.humidity} <br />
                            Min Temp = {info.tempMin}°C <br />
                            Max Temp = {info.tempMax}°C <br />
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}