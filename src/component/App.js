import HeaderContainer from './HeaderContainer.js'
import MainContainer from './MainContainer.js'
import forecast from './forecast.json'

function App() {
  //var data = JSON.parse(fs.readFileSync('../forecast.json'));

  
  var forcastData = forecast
  // fetch('url',{
  //   headers : { 
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //    }
  // })
  //     .then(response => {
  //         return response.json()
  //     })
  //     .then(data => {
  //         forcastData = data
  //     })

  return (
    <div className="App">
        <HeaderContainer x='Prognoza pogody'/>
        <MainContainer yy='main cont' hourlyData={forcastData.hourly} dailyData={forcastData.daily}/>



    </div>
  );
}

export default App;
