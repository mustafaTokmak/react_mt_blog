const Home = () => {
    const handleClick = (e) => {
        console.log('Hello From Ninja React Course',e.target)
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name);

    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                console.log('hello from inline func')
            }}>inline Click me</button>
            <button onClick={() => handleClickAgain('mustafa')}>Click me again</button>

        </div>
    );
}

export default Home;