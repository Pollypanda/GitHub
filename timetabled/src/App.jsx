import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1> Itinerary for 7 Days in Thailand</h1>
      <h2>Welcome to Thailand! Check out this calendar to get to know the city and explore all the things during your stay.</h2>
      <Calendar />
      
    </div>
  )
}

export default App