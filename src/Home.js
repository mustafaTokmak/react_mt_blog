import { useState } from 'react'; 
import BlogList from './BlogList';
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

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body:'lorem ipsum...', author: 'mario',id: 1},
        { title: 'Welcome party', body:'lorem ipsum...', author: 'yoshi',id: 2},
        { title: 'Web dev top tips', body:'lorem ipsum...', author: 'luigi',id: 3}
    ]);

    return (
        <div className="home"> 
            <h2>HomePage</h2>
            <p>{ name } is { age } years old. </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                console.log('hello from inline func')
            }}>inline Click me</button>
            <button onClick={() => handleClickAgain('mustafa')}>Click me again</button>

            
            <BlogList blogs={blogs} title="All Blogs !"/>
            <BlogList blogs={blogs.filter( (blog) => blog.author === 'mario')} title="Mario's blogs !"/>
            
            


        </div>
    );
}

export default Home;