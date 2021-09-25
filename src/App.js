import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <h1>tiktok clone</h1>
      <div className="app__videos">
           <Video/>
           <Video/>
           <Video/>
           <Video/>
           <Video/>
           <Video/>
      </div>   
    </div>
  );
}

export default App;
