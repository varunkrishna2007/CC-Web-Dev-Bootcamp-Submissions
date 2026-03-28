let count=5;
const Intervall= setInterval(() => {
    console.log(count);
    count--;
    if(count==0)
    {
        console.log(count);
        clearInterval(Intervall);
        console.log("Time's Up!");
    }
}, 1000);