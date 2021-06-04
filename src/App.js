import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name:'must', age:27 };
  const link = "http://www.google.com"  
  return (
    <div className="App">
      <Navbar/>
      <Home/>

      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"hello, to mars"}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
      
  
    </div>
  );
}

export default App;
