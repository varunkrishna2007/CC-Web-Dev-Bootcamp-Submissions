let count=0;

const intervall= setInterval(() => {
    console.log("Tick...")
    count++;
    if(count==5)
    {
        clearInterval(intervall);
        console.log("Stopped!");
    }
}, 1000);