const temp=document.querySelector('.temp');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const conditionOutput = document.querySelector('.condition');
const windOutput = document.querySelector('.wind');
const icon = document.querySelector('.icon');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='a28335c07d0439735ce47a3856395662';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
fetchWeatherData();
function fetchWeatherData(){

        fetch('localhost:8000/api.php').then(res => res.json()).then(data => {

            console.log(data);
            document.getElementById("condition").innerHTML = response.weather_description;
            document.getElementById("temp").innerHTML = response.weather_temperature;
            temp.innerHTML = data.current.temp.toFixed(0)+ "&#176;";
            cloudOutput.innerHTML = data.current.pressure + "hPa";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_speed+"km/h";
            conditionOutput.innerHTML= data.current.weather[0].main;
           ID= data.current.weather[0].id
            if(ID ==800){
                document.getElementById('video-bg').src="sunny.mp4";
                icon.src="113.png";

                }else if(ID >=200 && ID <=232){
                    document.getElementById('video-bg').src="cloudy.mp4";
            icon.src="116.png";
               }else if(ID>=600 && ID <=622){
                document.getElementById('video-bg').src="snowy.mp4";
                icon.src="338.png";
               }else if(ID >=701 && ID <=781){
                document.getElementById('video-bg').src="cloudy.mp4";
                icon.src="143.png";
               }else if(ID >=801 && ID <=804){
                document.getElementById('video-bg').src="cloudy.mp4";
                icon.src="116.png";
                   }else if(ID >=500 && ID <=531){
                    document.getElementById('video-bg').src="Rain.mp4";
                    icon.src="308.png"
               }
       
        });
           
       
            
}

        
        
  

        


        
   

