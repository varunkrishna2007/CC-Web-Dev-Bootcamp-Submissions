function divide(a,b)
{
    if(b==0)
    {
        throw new Error("Cannot Divide By Zero!"); 
    }
    return a/b;
}

try{
    const res1=divide(10,2);
    console.log("Result: "+res1);

}catch(error){
console.log("Error:", error.message);
}

try{
    const res1=divide(10,0);
    console.log("Result: "+res1);

}catch(error){
console.log("Error:", error.message);
}