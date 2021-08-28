//SELECTORS
const quotes = [
    {
        name:'F.M.Sam Manekshaw',
        quote:'If a man says he is not afraid of dying, he is either lying or he is a Gorkha.'
    },
    {
        name:'Captain Manoj Pandey (Param Vir Chakra)',
        quote:'If death strikes before I prove my blood, I promise, I will kill death.'
    },{
        name:'Captain Vikram Batra (Param Vir Chakra)',
        quote:'Either I will come back after hoisting the Tricolor, or I will come back wrapped in it. But I’ll be back for sure.'
    },{
        name:'Second Lieutenant Arun Khetarpal, (Param Vir Chakra)',
        quote:'No, Sir! I will not abandon my tank. My main gun is still working and I will get these bastards.'
    },{
        name:'Major Somanth Sharma (Param Vir Chakra)',
        quote:'The enemies are only 50 yards from us. We are heavily outnumbered. We are under devastating fire. I shall not withdraw an inch but will fight to our last man and our last round.'
    },{
        name:'Major Sudhir Kumar Walia (Ashoka Chakra)',
        quote:'I wont die in an accident or die of any disease. I will go down in glory.'
    },
]
const quoteBtn = document.querySelector('#quotebtn');
const quoteAuthor = document.querySelector('#QuoteAuthor');
const quote = document.querySelector('#Quote');

//EVENT LISTNERS
quoteBtn.addEventListener('click' ,displayQuote);


//FUNCTIONS
function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length); 
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}