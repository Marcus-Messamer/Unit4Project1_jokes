import Joke from './Joke.js';

const getJoke = async () => {
    let jokes = [];
    const response = await fetch("./data/jokes.json")
    const data = await response.json()
    data.jokes.forEach((joke) => {
        jokes.push(new Joke(joke.setup, joke.punchline));
    });
    return jokes
}

async function displayJoke(){
    const jokes = await getJoke();
    let index = Math.floor(Math.random()*5);
    console.log(index);

    console.log(jokes[index].tellJoke())
    document.getElementById("tellJoke").innerHTML =  jokes[index].tellJoke();


}

displayJoke()