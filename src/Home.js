import { useState } from 'react'; 
const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('luigi');
        setAge(23)
        console.log('Hello From Ninja React Course',e.target)
        console.log(name);
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name);

    }
    return (
        <div className="home"> 
            <h2>HomePage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                console.log('hello from inline func')
            }}>inline Click me</button>
            <button onClick={() => handleClickAgain('mustafa')}>Click me again</button>

        </div>
    );
}

export default Home;