class Forecast{
  constructor(){
    this.key = '';
    this.getWeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.getCityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }

  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.getWeatherURI + query);
    const data = await response.json();
    return data[0];
  }

  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.getCityURI + query);
    const data = await response.json();
    return data[0];
  }
}

const key = '4vB0oG3AWtmuArqgng1hyVmi4VJXbLa3';

// get weather information
const getWeather = async (id) => {
  
  

};

// get city information
const getCity = async (city) => {

  

};
