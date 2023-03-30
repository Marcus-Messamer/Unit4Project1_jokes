class Joke{
    constructor(setup,punchline){
        this.setup = setup;
        this.punchline = punchline;
    }

    tellJoke(){
        return `${this.setup}<br><br>\n\n${this.punchline}`;
    }
    
}





export default Joke;