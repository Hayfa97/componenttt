import './App.css';
import Name from './component/profile/FullName';
import Adress from './component/profile/Address';
import Photo from './component/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo />
        <br/>
      <Name/>
      <br/>
      <Adress/>
      </header>
    </div>
  );
}

export default App;
